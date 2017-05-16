var NodeGeocoder = require('node-geocoder'),
    geocoder = NodeGeocoder({
      provider: 'google',
      httpAdapter: 'https',
      apiKey: process.env.GOOGLE_API_KEY,
      formatter: null
    });

module.exports = function geocodeRequestPrototype(_constructor) {
  _constructor.prototype.geocodeRequest = function geocodeRequest(location) {
    var searchLocation;
    var geocodeRequest = {
        address: ' ',
        country: 'UnitedStates',
        zipcode: location
      };
      return geocoder.geocode(geocodeRequest)
      .then(function(geocodeResponse){
        return searchLocation = [
          geocodeResponse[0].latitude,
          geocodeResponse[0].longitude
        ];
      });
  }
};
