var router = require('express').Router();

// router.use requires a middleware function
router.use('/places', require('./places/placesRoutes.js'));


module.exports = router;
