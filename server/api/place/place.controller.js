// TODO move majority of geocoding and parameter structuring into a utility


exports.get = function (req, res, next) {
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
  var location = req.query.location;

geocoder.geocode(location)
    .then(function parseGeocodeResponse(geoResponse){
      // use params
      var params = {
          location: [geoResponse[0].latitude, geoResponse[0].longitude],
          radius: req.query.radius * 1609.344,
          type: req.query.type,
          pagetoken: req.query.pagetoken || null
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
};
