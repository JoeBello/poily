exports.get = function (req, res, next) {
  var GooglePlacesPromises = require('googleplaces-promises');
  var placesPromise = new GooglePlacesPromises(process.env.GOOGLE_API_KEY);
  var searchParams = {
    location: req.searchLocation,
    radius: req.query.radius * 1609.344 || null,
    type: req.query.type || null,
    pagetoken: req.query.pagetoken || null
  };
  
  placesPromise.placeSearch(searchParams)
    .then(function extractPlaces(placesResponse){
      res.send(placesResponse);
    })
    .catch(function(err){
      console.log(err.stack);
      res.status(500).send('Server error!');
    })
};
