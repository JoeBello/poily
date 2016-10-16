var router = require('express').Router();

router.use('/places', require('./places/placesRoutes'));


module.exports = router;
