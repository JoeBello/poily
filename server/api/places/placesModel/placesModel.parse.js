module.exports = function(_constructor) {
  _constructor.prototype.parse = function(responseObj) {
    var data = {};

    if (responseObj.next_page_token) {
      data.next_page_token = responseObj.next_page_token;
    }

    return new Promise(function(resolve, reject) {
      this.clone(responseObj)
        .then(function(newObj) {
          data.places = newObj;
          return resolve(data);
        })
        .catch(function(error) {
          return reject(error);
        });
    }.bind(this));
  }
};
