var controller = require('./places.controller'),
    router = require('express').Router();

router.route('/')
  .get(controller.get);

router.route('/collection')
  .get(controller.getCollection);

router.route('/:id')
  .get(controller.getOne);

module.exports = router
