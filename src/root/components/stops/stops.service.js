function StopsService ($localStorage, $rootScope) {
  return {
    // save a stop
    saveStop: function(stop) {
      var stops = $localStorage.project1.stops;
      stops.push(stop);
      return $rootScope.$broadcast('stop_change', stops);
    },
    // retrieve all stops
    getStops: function() {
      return $localStorage.project1.stops;
    },
    // remove a stop
    destroyStop: function(stop) {
      var stops = $localStorage.project1.stops;

      stops.splice(stops.indexOf(stop), 1);
      return $rootScope.$broadcast('stop_change', stop);
    },
    // remove all stops
    destroyStops: function() {
      var stops = $localStorage.project1.stops;
      stops.splice(0, stops.length);
      return $rootScope.$broadcast('stop_change', stops);
    }
  };
}

module.exports = StopsService;
