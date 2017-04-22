var components = angular.module('components', [
    require('./location/location.module'),
    require('./presets/presets.module'),
    require('./places/places.module')
  ]);

module.exports = components.name;
