var NodeGeocoder = require('node-geocoder');
var geocoder = NodeGeocoder({
      provider: 'google',
      httpAdapter: 'https',
      apiKey: process.env.GOOGLE_API_KEY,
      formatter: null
    });

var geocodeLocation = function (req, res, next) {
  if (req.query.coordinates) {
    req.searchLocation = req.query.coordinates;
    next();
  }

  geocoder.geocode(req.query.location)
    .then(function parseGeocodeResponse(geoResponse){
      req.searchLocation = [
        geoResponse[0].latitude,
        geoResponse[0].longitude
      ];
      next();
    });
};

module.exports = geocodeLocation;
