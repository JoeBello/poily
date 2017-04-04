var stopsComponents = angular.module('components.stops', [
    'ui.router'
  ])
  .service('StopsService', require('./stops.service'))
  .component('stops', require('./stops/stops.component'))
  .component('stop', require('./stop/stop.component'))
  .config(require('./stops.state'));


module.exports = stopsComponents.name;
