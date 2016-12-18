var router = require('express').Router();
var controller = require('./activity.controller');

router.route('/')
  .get(controller.get)
  .post(controller.post)

router.route('/:id')
  .get(controller.getOne)


module.exports = router;
