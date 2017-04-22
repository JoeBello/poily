function PlacesController(PlacesFactory, $state) {
  var ctrl = this;

  ctrl.$onInit = function() {
    ctrl.state = {};

    if (ctrl.places.error) {
      ctrl.state.error = true;
    } else {
      ctrl.state.success = true;
    }

    ctrl.hasPlaces = ctrl.places.length > 0;

    ctrl.hasPageToken = PlacesFactory.getNextPageToken() !== null;

  };

  ctrl.savePlace = function(event) {
    var place = {
          name: event.place.name,
          vicinity: event.place.vicinity,
          saved: true
        };

    if (event.place.opening_hours) {
      place.opening_hours = {};
      place.opening_hours.open_now = event.place.opening_hours.open_now;
    }

    if (event.place.photo) {
      place.photo = event.place.photo;
    }

    PlacesFactory.savePlace(place);
  };

  ctrl.nextPlaces = function() {
    var lastSearch = PlacesFactory.getLastSearch();

    lastSearch.pageToken = PlacesFactory.getNextPageToken();

    PlacesFactory.searchNewPlaces(lastSearch)
      .then(function(morePlaces) {
        ctrl.places = ctrl.places.concat(morePlaces);
      })
  }
}

module.exports = PlacesController;
