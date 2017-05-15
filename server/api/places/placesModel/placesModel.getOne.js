var GooglePlacesPromises = require('googleplaces-promises'),
    placesPromise = new GooglePlacesPromises(process.env.GOOGLE_API_KEY);

module.exports = function(_constructor) {
  _constructor.prototype.getOne = function(placeQuery) {
    return new Promise(function(resolve, reject) {
      placesPromise.placeDetailsRequest({
        placeid: placeQuery.id
      })
      .then(function(placesResponse){
        return resolve(placesResponse);
      });
    })
  }


}
