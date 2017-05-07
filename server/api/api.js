var router = require('express').Router();

router.use('/places', require('./places/places.router'));

module.exports = router;
