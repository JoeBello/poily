var placesModel = require('./places.model');

exports.get = function(req, res, next) {
  placesModel.get(req.query)
  .then(function(places){
    res.send(places);
  })
  .catch(function(error) {
    next(error);
  });
};

exports.getOne = function(req, res, next) {
  placesModel.getOne(req.params)
  .then(function(place){
    res.send(place);
  })
  .catch(function(error){
    next(error);
  })
}
