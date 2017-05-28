function PlacesSavedController(PlaceFactory) {
  var ctrl = this;

  ctrl.hasSavedPlaces = function hasSavedPLaces() {
    return ctrl.places.length > 0;
  }

  ctrl.deleteAllPlaces = function deleteAllPlaces() {
    PlaceFactory.deleteAllPlaces();
    ctrl.places = [];
  };

  ctrl.deletePlace = function deletePlace(event) {
    PlaceFactory.deletePlace(event.place);
    ctrl.places.splice(ctrl.places.indexOf(event.place), 1);
  };
}

module.exports = PlacesSavedController;
