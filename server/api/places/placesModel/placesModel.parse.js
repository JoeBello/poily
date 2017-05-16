var GooglePlacesPromises = require('googleplaces-promises'),
    placesPromise = new GooglePlacesPromises(process.env.GOOGLE_API_KEY);


module.exports = function parsePrototype(_constructor) {
  _constructor.prototype.parse = function parse(obj) {
    var places = [],
        placesData = {},
        promises = [],
        results;

    if (obj.next_page_token) {
      placesData.next_page_token = obj.next_page_token;
    }

    // GooglePlaces API payload refers to a list of results via parameter
    // 'results', while a payload containing a singular result is referred to
    // via parameter 'result'
    if (obj.results) {
      Array.prototype.map.call(obj.results, parser);
    }

    if (obj.result) {
      parser(obj.result)
    }

    return new Promise(function parserPromise(resolve, reject) {
      Promise.all(promises)
        .then(function() {
          placesData.results = places;
          return resolve(placesData);
        })
        .catch(function(error) {
          return reject(error);
        });
    })

    function parser(result) {
      var returnObj = {};

      returnObj.name = result.name,
      returnObj.place_id = result.place_id,
      returnObj.types = result.types,
      returnObj.vicinity = result.vicinity

      if (result.opening_hours) {
        returnObj.opening_hours = result.opening_hours;
      }

      if (result.rating) {
        returnObj.rating = result.rating;
      }

      if (result.photos) {
        returnObj.attributions = result.photos[0].html_attributions[0];
        promises.push(
          placesPromise.imageFetch({
            maxwidth: 200,
            photoreference: result.photos[0].photo_reference
          })
          .then(function(image) {
            returnObj.photo = image;
          })
        );
      }
      places.push(returnObj);
    }
  };
};
