function PlacesController(PlacesService, $state) {
  var ctrl = this;

  ctrl.$onInit = function() {
    if (ctrl.places.error) {
      $state.go('search', {error: ctrl.places.error});
    } else {
      ctrl.lastSearch = PlacesService.getLastSearch();
      ctrl.pageToken = PlacesService.getLastPageToken();
    }
  };

  ctrl.hasPlaces = function() {
    return ctrl.places.length > 0;
  };

  ctrl.makeActivity = function(event) {
    var place = event.place,
        activity = {
          name: place.name,
          location: place.vicinity,
          id: place.place_id
        };

    PlacesService.makeActivity(activity);
  };

  ctrl.nextPage = function() {
    ctrl.lastSearch.pageToken = ctrl.pageToken || null;

    PlacesService.searchPlaces(ctrl.lastSearch)
      .then(function(response) {
        ctrl.places = ctrl.places.concat(response);
      })
      .catch(function(error) {
        $state.go('search', {error: error});
      });
  }
}

module.exports = PlacesController;
