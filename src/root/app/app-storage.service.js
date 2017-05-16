function AppStorageService($localStorage, $rootScope) {
  return {
    deleteStorage: function deleteStorage() {
      delete $localStorage.Poily;
    },

    deleteAllPlaces: function deleteAllPlaces() {
      var places = $localStorage.Poily.places;
      places.splice(0, places.length);
      return $rootScope.$broadcast('places_change', places.length);
    },

    deletePlace: function deletePlace(place) {
      var places = $localStorage.Poily.places;
      places.splice(places.indexOf(place), 1);
      return $rootScope.$broadcast('places_change', places.length);
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
      return $localStorage.Poily.lastSearch.next_page_token || null;
    },

    getPlaceCount: function getPlaceCount() {
      return $localStorage.Poily.places.length;
    },

    getSavedPlaces: function getSavedPlaces() {
      return $localStorage.Poily.places;
    },

    init: function init() {
      if (!$localStorage.hasOwnProperty('Poily')) {
        return $localStorage.$default({
          Poily: { lastSearch: { next_page_token: null }, places: [] }
        });
      } else {
        return $localStorage.Poily;
      }
    },

    saveNextPageToken: function saveNextPageToken(token) {
      return $localStorage.Poily.lastSearch.next_page_token = token;
    },

    saveSearch: function saveSearch(searchDetails) {
      return $localStorage.Poily.lastSearch = searchDetails;
    },

    savePlace: function savePlace(place) {
      var places = $localStorage.Poily.places;
      places.push(place);
      return $rootScope.$broadcast('places_change', places.length);
    }

  }
}

module.exports = AppStorageService;
