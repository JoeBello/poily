function PlacesController(PlaceFactory, $state) {
  var ctrl = this;

  ctrl.$onInit = function onInit() {
    ctrl.state = {};

    if (ctrl.places.error) {
      ctrl.state.error = true;
      ctrl.error = ctrl.places;
    } else {
      ctrl.state.success = true;
    }

    PlaceFactory.init();

    ctrl.hasPlaces = ctrl.places.length > 0;
  };

  ctrl.hasPageToken = function hasPageToken() {
    return PlaceFactory.getNextPageToken() !== null;
  };

  ctrl.savePlace = function savePlace(event) {
    PlaceFactory.savePlace(event.place);
  };

  ctrl.nextPlaces = function nextPlaces() {
    PlaceFactory.getMorePlaces()
      .then(function(morePlaces) {
        ctrl.places = ctrl.places.concat(morePlaces);
      })
  }
}

module.exports = PlacesController;
