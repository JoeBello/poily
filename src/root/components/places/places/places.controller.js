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
          vicinity: place.vicinity
        };

    if (place.opening_hours) {
      stop.opening_hours = {};
      stop.opening_hours.open_now = place.opening_hours.open_now;
    }

    StopsService.saveStop(stop);
  };

  ctrl.nextPlaces = function() {
    var lastSearch = AppStorageService.getLastSearch();
    lastSearch.pageToken = AppStorageService.getNextPageToken();

    PlacesService.searchPlaces(lastSearch)
      .then(function(morePlaces) {
        ctrl.places = ctrl.places.concat(morePlaces);
      })
  }
}

module.exports = PlacesController;
