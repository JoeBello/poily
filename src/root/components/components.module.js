var components = angular.module('components', [
  require('./location/location.module'),
  require('./preset/preset.module'),
  require('./place/place.module')
]);

module.exports = components.name;
