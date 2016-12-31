var NodeGeocoder = require('node-geocoder');
var geocoder = NodeGeocoder({
      provider: 'google',
      httpAdapter: 'https',
      apiKey: process.env.GOOGLE_API_KEY,
      formatter: null
    });

var geocodeLocation = function (req, res, next) {
  if (req.query.latitude && req.query.longitude) {
    req.searchLocation = [
      req.query.latitude,
      req.query.longitude
    ];
    next();
  } else {
    geocoder.geocode(req.query.location)
    .then(function parseGeocodeResponse(geocodeResponse){
      req.searchLocation = [
        geocodeResponse[0].latitude,
        geocodeResponse[0].longitude
      ];
      next();
    });
  }

};

module.exports = geocodeLocation;
