var router = require('express').Router();
var controller = require('./place.controller');
var geocoder = require('../../middleware/middleware.geocoder');


router.route('/')
  .get(geocoder, controller.get)


module.exports = router
