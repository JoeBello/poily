var GooglePlacesPromises = require('googleplaces-promises'),
    placesPromise = new GooglePlacesPromises(process.env.GOOGLE_API_KEY);

module.exports = function(_constructor) {
  _constructor.prototype.get = function(placesQuery) {
    return new Promise(function(resolve, reject) {
      if (!placesQuery.location) {
        return reject('No location provided.');
      }

      if (placesQuery.location.length === 5) {
        this.geocodeRequest(placesQuery.location)
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
          return this.parse(placesResponse)
        }.bind(this))
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
    }.bind(this));
  };
}
