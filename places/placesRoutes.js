var express = require('express');
var placesRouter = express.Router();

placesRouter.route('/')
  .get(function(request, response){
    console.log('request received in places.');
  });

module.exports = placesRouter;
