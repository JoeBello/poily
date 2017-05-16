module.exports = function getCollectionPrototype(_constructor) {
  _constructor.prototype
    .getCollection = function getCollection(placesCollection) {
      var collectionData = {},
          promises = [],
          results = [];

      for (id in placesCollection) {
        promises.push(
          this.getOne(placesCollection[id])
          .then(function(place) {
            results.push(place.results[0]);
          })
        );
      }

      return new Promise(function getCollectionPromise(resolve, reject) {
        Promise.all(promises)
        .then(function() {
          collectionData.results = results;
          return resolve(collectionData);
        })
        .catch(function(error) {
          return reject(error);
        })
      })
  };
};
