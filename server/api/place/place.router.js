var router = require('express').Router();
var controller = require('./place.controller');


router.all('*', function (req, res, next) {
  console.log('Request received in places.');
  console.log(req.query);
  next();
})

router.route('/')
  .get(controller.get)

router.route('/test')
  .get(controller.getOne)


module.exports = router;
