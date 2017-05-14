var clone = require('./places.model.clone');

module.exports = function(responseObj) {
  var data = {};

  if (responseObj.next_page_token) {
    data.next_page_token = responseObj.next_page_token;
  }

  return new Promise(function(resolve, reject) {
    clone(responseObj)
    .then(function(newObj) {
      data.places = newObj;
      return resolve(data);
    })
    .catch(function(error) {
      return reject(error);
    });
  })
};
