var GooglePlacesPromises = require('googleplaces-promises'),
    placesPromise = new GooglePlacesPromises(process.env.GOOGLE_API_KEY);

module.exports = function getPrototype(_constructor) {
  _constructor.prototype.get = function get(placesQuery) {
    return new Promise(function getPromise(resolve, reject) {
      if (!placesQuery.location) {
        return reject('No location provided.');
      }

      // zipcode = 5 characters long
      if (placesQuery.location.length === 5) {
        this.geocodeRequest(placesQuery.location)
        .then(function(geocodeResponse) {
            return placesPromise.placeSearch({
              location: geocodeResponse,
              pagetoken: placesQuery.pageToken || null,
              // convert miles to meters
              radius: placesQuery.radius * 1609.34,
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
          // convert miles to meters
          radius: placesQuery.radius * 1609.344,
          type: placesQuery.type || null
        })
        .then(function(placesResponse) {
          return this.parse(placesResponse)
        }.bind(this))
        .then(function(parsedResults) {
          return resolve(parsedResults);
        })
        .catch(function(error) {
          return reject(error);
        });
      }
    }.bind(this));
  };
}
