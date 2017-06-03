function AppService($localStorage, $rootScope) {
  return {
    deleteStorage: function deleteStorage() {
      delete $localStorage.Poily;
    },

    getPlaceCount: function getPlaceCount() {
      return $localStorage.Poily.place.placesSaved.length || 0;
    },

    getLastSearch: function getLastSearch() {
      return $localStorage.Poily.lastSearch || null;
    },

    init: function init() {
      if (!$localStorage.hasOwnProperty('Poily')) {
        $localStorage.$default({
          Poily: {}
        });
      }
    }
  }
}

module.exports = AppService;
