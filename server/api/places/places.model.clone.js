var GooglePlacesPromises = require('googleplaces-promises'),
    placesPromise = new GooglePlacesPromises(process.env.GOOGLE_API_KEY);


module.exports = function(obj) {
  var promises = [],
      results,
      returnArr = [];

  // obj.results ? results = obj.results : results = obj.result;

  obj.results.map(function(result) {
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
          maxwidth: 150,
          photoreference: result.photos[0].photo_reference
        })
        .then(function(image) {
          returnObj.photo = image;
        })
      );
    }
    returnArr.push(returnObj);
  });

  return new Promise(function(resolve, reject) {
    Promise.all(promises)
      .then(function() {
        return resolve(returnArr);
      })
      .catch(function(error) {
        return reject(error);
      });
  })
};
