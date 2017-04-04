function AppStorageService($localStorage, $rootScope) {
  return {
    init: function() {
      if (!$localStorage.hasOwnProperty('project1')) {
        $localStorage.$default({
          project1: {
            places: {
              lastSearch: {}
            },
            stops: []
          }
        })
      }
    },
    // completely remove project1 storage
    destroyStorage: function() {
      delete $localStorage.project1;
    },

    // retrieve details of the most recent search
    getLastSearch: function() {
      return $localStorage.project1.places.lastSearch;
    },

    // retrieve the location of the most recent search
    getLastLocation: function() {
      var location = $localStorage.project1.places.lastSearch.location || null;

      if (typeof location === 'string' || location === null) {
        return location;
      } else if (typeof location === 'object') {
        return location = location.join(',');
      }

    },

    // retrieve the next page token from the results of the last search
    getNextPageToken: function() {
      return $localStorage.project1.places.lastSearch.pageToken || null;
    },

    // retrieve the number of saved stops
    stopCount: function() {
      var stops = $localStorage.project1.stops;

      return stops.length;
    }
  }
}

module.exports = AppStorageService;
