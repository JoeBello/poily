var locationComponents = angular.module('components.location', [])
  .factory('LocationFactory', require('./location.factory'))
  .component('locationDetail', require('./location-detail/location-detail.component'))
  .component('search', require('./search/search.component'));

module.exports = locationComponents.name;
