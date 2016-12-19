var router = require('express').Router();

// api router mounts the routers for api resources
router.use('/places', require('./place/place.router'));


module.exports = router;
