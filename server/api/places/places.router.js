var router = require('express').Router();
var controller = require('./places.controller');


router.route('/')
  .get(controller.getPlaces);


module.exports = router
