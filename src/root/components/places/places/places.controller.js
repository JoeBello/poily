function PlacesController(PlacesService, AppStorageService, $state) {
  var ctrl = this;

  ctrl.hasPlaces = function() {
    return ctrl.places.length > 0;
  };

  ctrl.hasPageToken = function() {
    return AppStorageService.getLastPageToken() === null;
  };

  ctrl.makeActivity = function(event) {
    var place = event.place,
        activity = {
          name: place.name,
          location: place.vicinity,
          id: place.place_id
        };

    AppStorageService.saveActivity(activity);
  };

  ctrl.nextPage = function() {
    var lastSearch = AppStorageService.getLastSearch();
    lastSearch.pageToken = AppStorageService.getLastPageToken();

    PlacesService.searchPlaces(lastSearch)
      .then(function(response) {
        ctrl.places = ctrl.places.concat(response);
      })
      .catch(function(error) {
        $state.go('search', {error: error});
      });
  }
}

module.exports = PlacesController;
