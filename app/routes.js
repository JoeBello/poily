// TODO move api query into route
// TODO cache and use next page token

// var GooglePlacesPromises = require('googleplaces-promises'),
//     placesPromise = new GooglePlacesPromises(process.env.GOOGLE_API_KEY);
//
// var nodeGeocoder = require('node-geocoder'),
//     nodeGeocoderOptions = {
//       provider: 'google',
//       httpAdapter: 'https',
//       apiKey: process.env.GOOGLE_API_KEY,
//       formatter: null
//     },
//     geocoder = nodeGeocoder(nodeGeocoderOptions);

// var placesSearch = function makePlacesSearch(req, res, next){
//   geocoder.geocode(req.query.location)
//     .then(function(geoData){
//       console.log(geoData);
//       req.geoData = geoData;
//       next();
//     })
//     .catch(function(err){
//       console.log(err + '');
//     })
// };

// var metersPerMile = function metersPerMile(miles){
//   return miles * 1609.344;
// };
//
// var makePlacesSearch = function makePlacesSearch(request, response, next){
//   var placesResults = {};
//
//   geocoder.geocode(request.query.location)
//   .then(function searchPlaces(geoResponse){
//     var params = {
//         location: [geoResponse[0].latitude, geoResponse[0].longitude],
//         types: request.query.venue,
//         radius: metersPerMile(request.query.radius)
//     };
//     placesPromise.placeSearch(params)
//     .then(function(placesResponse){
//       console.log('FIRST PLACESRESPONSE RESULTS');
//       console.log(placesResponse.results);
//       if (placesResponse.next_page_token){
//         nextpage = placesResponse.next_page_token;
//         params.pagetoken = placesResponse.next_page_token;
//         // recursively make api call?
//       }
//       console.log('Updated parameters: ');
//       console.log(params);
//       placesResults = placesResponse.results;
//       request.placesResults = placesResults;
//       // console.log('results: ');
//       // console.log(placesResults);
//       // console.log(placesResponse);
//       if (nextpage) {
//         console.log('NEXT PAGE TOKEN');
//         console.log(nextpage);
//         placesPromise.placeSearch(params)
//         .then(function(placesResponse){
//           console.log('SECOND PLACESPROMISE RESULTS');
//           console.log(placesResponse.results);
//         })
//       }
//       next();
//     })
//     .catch(function(error){
//       console.log('Place error: ' + error);
//     })
//   })
// }

// Exports
// module.exports = {
//   search: placesSearch
// }

var express = require('express');
var router = express.Router();

router.get('/api/places', function(req, res){
  console.log('Request received in places.');
  res.end();
});

module.exports = function(app){
  app.use('/', router);
}
