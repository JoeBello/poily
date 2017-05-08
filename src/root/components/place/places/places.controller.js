function PlacesController(PlaceFactory, $state) {
  var ctrl = this;

  ctrl.$onInit = function() {
    ctrl.state = {};

    if (ctrl.places.error) {
      ctrl.state.error = true;
      ctrl.error = ctrl.places;
    } else {
      ctrl.state.success = true;
    }

    ctrl.hasPlaces = ctrl.places.length > 0;

    ctrl.hasPageToken = PlaceFactory.getNextPageToken() !== null;

  };

  ctrl.savePlace = function(event) {
    var place = {
          name: event.place.name,
          vicinity: event.place.vicinity,
          types: event.place.types,
          saved: true
        };

    if (event.place.opening_hours) {
      place.opening_hours = {};
      place.opening_hours.open_now = event.place.opening_hours.open_now;
    }

    if (event.place.photo) {
      place.photo = event.place.photo;
    }

    PlaceFactory.savePlace(place);
  };

  ctrl.nextPlaces = function() {
    var lastSearch = PlaceFactory.getLastSearch();

    lastSearch.pageToken = PlaceFactory.getNextPageToken();

    PlaceFactory.searchNewPlaces(lastSearch)
      .then(function(morePlaces) {
        ctrl.places = ctrl.places.concat(morePlaces);
      })
  }
}

module.exports = PlacesController;
