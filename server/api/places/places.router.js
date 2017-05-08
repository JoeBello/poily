var controller = require('./places.controller'),
    router = require('express').Router();

router.route('/')
  .get(controller.getPlaces);


module.exports = router
