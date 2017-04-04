var components = angular.module('components', [
    require('./stops/stops.module'),
    require('./places/places.module')
  ]);

module.exports = components.name;
