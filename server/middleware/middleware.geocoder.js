var NodeGeocoder = require('node-geocoder');
var geocoder = NodeGeocoder({
      provider: 'google',
      httpAdapter: 'https',
      apiKey: process.env.GOOGLE_API_KEY,
      formatter: null
    });

var geocodeLocation = function (req, res, next) {
  if (req.query.location.length === 5) {
    var geocodeRequest = {
      address: ' ',
      country: 'UnitedStates',
      zipcode: req.query.location
    };
    geocoder.geocode(geocodeRequest)
    .then(function parseGeocodeResponse(geocodeResponse){
      req.searchLocation = [
        geocodeResponse[0].latitude,
        geocodeResponse[0].longitude
      ];
      next();
    });
  } else {
    req.searchLocation = req.query.location;
    next();
  }
}

module.exports = geocodeLocation;
