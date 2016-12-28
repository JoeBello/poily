var router = require('express').Router();
var controller = require('./activity.controller');

router.param('')


router.route('/')
  .get(controller.get)
  .post(controller.post)

router.route('/:id')
  .get(controller.getOne)
  // .put
  // .delete


module.exports = router;
