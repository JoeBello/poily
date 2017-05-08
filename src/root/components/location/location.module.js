var locationComponents = angular.module('components.location', [])
  .factory('LocationFactory', require('./location.factory'))
  .component('location', require('./location/location.component'))
  .component('locationDetail', require('./location-detail/location-detail.component'));

module.exports = locationComponents.name;
