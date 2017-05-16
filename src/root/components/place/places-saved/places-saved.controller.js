function PlacesSavedController(PlaceFactory) {
  var ctrl = this;

  ctrl.$onInit = function onInit() {
    ctrl.hasSavedPlaces = ctrl.places.length > 0;
  };

  ctrl.deleteAllPlaces = function deleteAllPlaces() {
    PlaceFactory.deleteAllPlaces();
  };

  ctrl.deletePlace = function deletePlace(event) {
    return PlaceFactory.deletePlace(event.place);
  };
}

module.exports = PlacesSavedController;
