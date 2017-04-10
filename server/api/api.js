var router = require('express').Router();

// api router mounts the routers for api resources
router.use('/places', require('./places/places.router'));
router.use('/user', require('./user/user.router'))

module.exports = router;
