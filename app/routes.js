var express = require('express'),
    router = express.Router();

var bodyParser = require('body-parser');

var GooglePlacesPromises = require('googleplaces-promises'),
    placesPromise = new GooglePlacesPromises(process.env.GOOGLE_API_KEY);

var nodeGeocoder = require('node-geocoder'),
    nodeGeocoderOptions = {
      provider: 'google',
      httpAdapter: 'https',
      apiKey: process.env.GOOGLE_API_KEY,
      formatter: null
    },
    geocoder = nodeGeocoder(nodeGeocoderOptions);

router.use(function(req, res, next){
  console.log('Request received in places.');
  console.log(req.query);
  next();
});

router.get('/api/places', function(req, res){
  console.log('GET request received');
  geocoder.geocode(req.query.location)
    .then(function parseGeocodeResponse(geoResponse){
      console.log('Got the geocode data!');
      var params = {
          location: [geoResponse[0].latitude, geoResponse[0].longitude],
          radius: req.query.radius * 1609.344,
          type: req.query.venue,
          pagetoken: req.query.pageToken || null
          };
      return params;
    })
    .then(function searchPlaces(searchParams){
      return placesPromise.placeSearch(searchParams)
    })
    .then(function placesResults(placesResponse){
      console.log('Sending places search response...');
      res.send(placesResponse);
    })
    .catch(function(err){
      console.log(err.stack);
      res.status(500).send('Server error!');
    })
});

module.exports = function(app){
  app.use('/', router);
}
