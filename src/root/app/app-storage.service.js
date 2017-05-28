function AppStorageService($localStorage, $rootScope) {
  return {
    deleteStorage: function deleteStorage() {
      delete $localStorage.Poily;
    },

    deleteAllPlaces: function deleteAllPlaces() {
      var places = $localStorage.Poily.places;
      places.splice(0, places.length);
      $rootScope.$broadcast('places_change', places.length);
    },

    deletePlace: function deletePlace(place) {
      var places = $localStorage.Poily.places;
      places.splice(places.indexOf(place), 1);
      $rootScope.$broadcast('places_change', places.length);
    },

    getLastLocation: function getLastLocation() {
      var location = $localStorage.Poily.lastSearch.location || null,
          errorObject = {
            error: '',
            source: 'AppStorageService.getLastLocation'
          };

      try {
        if (typeof location === 'string' || location === null) {
          return location;
        } else if (typeof location === 'object') {
          return location = location.join(',');
        } else {
          errorObject.error = 'invalid location';
          throw errorObject;
        }
      }
      catch(error) {
        console.log(error);
        return null;
      }
    },

    getLastSearch: function getLastSearch() {
      return $localStorage.Poily.lastSearch;
    },

    getNextPageToken: function getNextPageToken() {
      return $localStorage.Poily.next_page_token;
    },

    getPlaceCount: function getPlaceCount() {
      return $localStorage.Poily.places.length;
    },

    getSavedPlaces: function getSavedPlaces() {
      return $localStorage.Poily.places;
    },

    init: function init() {
      if (!$localStorage.hasOwnProperty('Poily')) {
        $localStorage.$default({
          Poily: { next_page_token: null, lastSearch: { }, places: [] }
        });
      }
    },

    saveNextPageToken: function saveNextPageToken(token) {
      $localStorage.Poily.next_page_token = null;

      if (token) {
        $localStorage.Poily.next_page_token = token;
      }
    },

    saveSearch: function saveSearch(searchDetails) {
      $localStorage.Poily.lastSearch = searchDetails;
    },

    savePlace: function savePlace(place) {
      var places = $localStorage.Poily.places;
      places.push(place);
      $rootScope.$broadcast('places_change', places.length);
    }

  }
}

module.exports = AppStorageService;
