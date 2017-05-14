var NodeGeocoder = require('node-geocoder'),
    geocoder = NodeGeocoder({
      provider: 'google',
      httpAdapter: 'https',
      apiKey: process.env.GOOGLE_API_KEY,
      formatter: null
    }),
    GooglePlacesPromises = require('googleplaces-promises'),
    placesPromise = new GooglePlacesPromises(process.env.GOOGLE_API_KEY),
    parse = require('./places.model.parse');

var geocodeRequest = function (location) {
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

var getAllPlaces = function(placesQuery) {
  return new Promise(function(resolve, reject) {
    if (!placesQuery.location) {
      return reject('No location provided.');
    }

    if (placesQuery.location.length === 5) {
      geocodeRequest(placesQuery.location)
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
        return parse(placesResponse)
      })
      .then(function(parsedResults) {
        return resolve(parsedResults);
      })
      .catch(function(error) {
        return reject(error);
      })
    } else {
      placesPromise.placeSearch({
        location: placesQuery.location,
        pagetoken: placesQuery.pageToken || null,
        // default radius to 10 miles
        radius: (placesQuery.radius || 10) * 1609.344,
        type: placesQuery.type || null
      })
      .then(function(placesResponse) {
        return parse(placesResponse)
      })
      .then(function(parsedResults) {
        console.log(parsedResults);
        return resolve(parsedResults);
      })
      .catch(function(error) {
        return reject(error);
      })
    }
  });
};

var getOnePlace = function(placeQuery) {
  return new Promise(function(resolve, reject) {
    placesPromise.placeDetailsRequest({
      placeid: placeQuery.id
    })
    .then(function(placesResponse){
      // console.log(placesResponse);
      return resolve(placesResponse);
    });
  })
}

module.exports = {
  get: getAllPlaces,
  getOne: getOnePlace
};
