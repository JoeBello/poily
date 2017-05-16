var placesModel = require('./placesModel/placesModel');

exports.get = function get(req, res, next) {
  placesModel.get(req.query)
  .then(function(places){
    res.send(places);
  })
  .catch(function(error) {
    next(error);
  });
};

exports.getCollection = function getCollection(req, res, next) {
  placesModel.getCollection(req.query)
  .then(function(collection) {
    res.send(collection);
  })
  .catch(function(error) {
    next(error);
  });
};

exports.getOne = function getOne(req, res, next) {
  placesModel.getOne(req.params.id)
  .then(function(place){
    res.send(place);
  })
  .catch(function(error){
    next(error);
  })
}
