var placesModel = require('./places.model');

exports.getPlaces = function(req, res, next) {
  placesModel.getPlaces(req.query)
  .then(function(places){
    res.send(places);
  })
  .catch(function(error) {
    next(error);
  });
};
