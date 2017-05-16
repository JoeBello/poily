var GooglePlacesPromises = require('googleplaces-promises'),
    placesPromise = new GooglePlacesPromises(process.env.GOOGLE_API_KEY);

module.exports = function getOnePrototype(_constructor) {
  _constructor.prototype.getOne = function getOne(id) {
    return new Promise(function getOnePromise(resolve, reject) {
      placesPromise.placeDetailsRequest({
        placeid: id
      })
      .then(function(placesResponse){
        return this.parse(placesResponse);
      }.bind(this))
      .then(function(places){
        return resolve(places);
      })
      .catch(function(error) {
        return reject(error);
      });
    }.bind(this))
  }
}
