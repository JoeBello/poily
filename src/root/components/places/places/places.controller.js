function PlacesController(PlacesService, AppStorageService, StopsService, $state) {
  var ctrl = this;

  ctrl.$onInit = function() {
    ctrl.state = {};

    if (ctrl.places.error) {
      ctrl.state.error = true;
    } else {
      ctrl.state.success = true;
    }

    ctrl.hasPlaces = ctrl.places.length > 0;

    ctrl.hasPageToken = AppStorageService.getNextPageToken() !== null;

  };

  ctrl.makeStop = function(event) {
    var place = event.place,
        stop = {
          name: place.name,
          location: place.vicinity,
          id: place.place_id
        };

    StopsService.saveStop(stop);
  };

  ctrl.nextPage = function() {
    var lastSearch = AppStorageService.getLastSearch();
    lastSearch.pageToken = AppStorageService.getNextPageToken();

    PlacesService.searchPlaces(lastSearch)
      .then(function(morePlaces) {
        ctrl.places = ctrl.places.concat(morePlaces);
      })
  }
}

module.exports = PlacesController;
