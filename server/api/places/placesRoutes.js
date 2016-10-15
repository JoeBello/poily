var router = require('express').Router();

router.route('/')
  .get(function(req, res){
    console.log('request received in places.');
    res.send({ response: 'success!' });
  });

module.exports = router;
