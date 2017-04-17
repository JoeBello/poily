var locationComponents = angular.module('components.location', [])
  .factory('LocationFactory', require('./location.factory'))
  .component('locationDetail', require('./location-detail/location-detail.component'))
  .component('location', require('./location/location.component'));

module.exports = locationComponents.name;
