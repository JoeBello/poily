var router = require('express').Router();
var search = require('./placesController').search;

router.route('/')
  .get(search, function(req, res){
    console.log('request received in places.');
    res.send(req.geoData);
  });

module.exports = router;
