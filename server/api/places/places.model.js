var NodeGeocoder = require('node-geocoder'),
    geocoder = NodeGeocoder({
      provider: 'google',
      httpAdapter: 'https',
      apiKey: process.env.GOOGLE_API_KEY,
      formatter: null
    }),
    GooglePlacesPromises = require('googleplaces-promises'),
    placesPromise = new GooglePlacesPromises(process.env.GOOGLE_API_KEY);

var parsePlaces = function(placesResponse) {
  var placesData = {},
      placesDetails = [],
      places = placesResponse.results,
      promises = [];

  if (placesResponse.next_page_token) {
    placesData.next_page_token = placesResponse.next_page_token;
  }

  placesDetails = places.map(function(place) {
    var returnPlace = {};
      returnPlace.name = place.name,
      returnPlace.place_id = place.place_id,
      returnPlace.types = place.types,
      returnPlace.vicinity = place.vicinity

    if (place.opening_hours) {
      returnPlace.opening_hours = place.opening_hours;
    }

    if (place.rating) {
      returnPlace.rating = place.rating;
    }

    if (place.photos) {
      returnPlace.attributions = place.photos[0].html_attributions[0];
      promises.push(
        placesPromise.imageFetch({
          maxwidth: 300,
          photoreference: place.photos[0].photo_reference
        })
        .then(function(image) {
          return returnPlace.photo = image;
        })
      );
    }
    return returnPlace;
  });

  return Promise.all(promises)
    .then(function() {
      placesData.places = placesDetails;
      return placesData;
    });
};

var geocodeLocation = function (location) {
  var searchLocation;
  var geocodeRequest = {
      address: ' ',
      country: 'UnitedStates',
      zipcode: location
    };
    return geocoder.geocode(geocodeRequest)
    .then(function parseGeocodeResponse(geocodeResponse){
      return searchLocation = [
        geocodeResponse[0].latitude,
        geocodeResponse[0].longitude
      ];
    });
};

var getPlaces = function(placesQuery) {
  return new Promise(function(resolve, reject) {
    if (!placesQuery.location) {
      return reject('No location provided.');
    }

    if (placesQuery.location.length === 5) {
      geocodeLocation(placesQuery.location)
      .then(function(geocodeResponse) {
          return placesPromise.placeSearch({
            location: geocodeResponse,
            pagetoken: placesQuery.pageToken || null,
            // default radius to 10 miles
            radius: (placesQuery.radius || 10) * 1609.344,
            type: placesQuery.type || null
          });
      })
      .then(function(placesResponse) {
        return parsePlaces(placesResponse)
      })
      .then(function(parsedResults) {
        return resolve(parsedResults);
      });
    } else {
      placesPromise.placeSearch({
        location: placesQuery.location,
        pagetoken: placesQuery.pageToken || null,
        // default radius to 10 miles
        radius: (placesQuery.radius || 10) * 1609.344,
        type: placesQuery.type || null
      })
      .then(function(placesResponse) {
        return parsePlaces(placesResponse)
      })
      .then(function(parsedResults) {
        return resolve(parsedResults);
      });
    }

  });
};


module.exports.getPlaces = getPlaces;
