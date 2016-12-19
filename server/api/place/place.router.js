var router = require('express').Router();
var controller = require('./place.controller');


router.all('*', function (req, res, next) {
  console.log('Request received in places.');
  next();
})

router.route('/')
  .get(controller.get)


module.exports = router
