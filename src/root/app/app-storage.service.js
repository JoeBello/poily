function AppStorageService($localStorage, $rootScope) {
  return {

    deleteStorage: function() {
      delete $localStorage.Placer;
    },

    deleteAllPlaces: function() {
      var places = $localStorage.Placer.places;
      places.splice(0, places.length);
      return $rootScope.$broadcast('places_change', places.length);
    },

    deletePlace: function(place) {
      var places = $localStorage.Placer.places;
      places.splice(places.indexOf(place), 1);
      return $rootScope.$broadcast('places_change', places.length);
    },

    getLastLocation: function() {
      var location = $localStorage.Placer.lastSearch.location || null;

      if (typeof location === 'string' || location === null) {
        return location;
      } else if (typeof location === 'object') {
        // TODO everything is object
        return location = location.join(',');
      }

    },

    getLastSearch: function() {
      return $localStorage.Placer.lastSearch;
    },

    getNextPageToken: function() {
      return $localStorage.Placer.lastSearch.next_page_token;
    },

    getPlaceCount: function() {
      var places = $localStorage.Placer.places;
      return places.length;
    },

    getSavedPlaces: function() {
      return $localStorage.Placer.places;
    },

    init: function() {
      if (!$localStorage.hasOwnProperty('Placer')) {
        return $localStorage.$default({
          Placer: { lastSearch: { next_page_token: null }, places: [] }
        });
      } else {
        return $localStorage.Placer;
      }
    },

    saveNextPageToken: function(token) {
      // TODO next_page_token seems to be the same every time
      return $localStorage.Placer.lastSearch.next_page_token = token;
    },

    saveSearch: function(searchDetails) {
      $localStorage.Placer.lastSearch = searchDetails;
      return $rootScope.$broadcast('location_change', searchDetails.location)
    },

    savePlace: function(place) {
      var places = $localStorage.Placer.places;
      places.push(place);
      return $rootScope.$broadcast('places_change', places.length);
    }

  }
}

module.exports = AppStorageService;
