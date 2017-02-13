var components = angular.module('components', [
    require('./activities/activities.module'),
    require('./places/places.module')
  ]);

module.exports = components.name;
