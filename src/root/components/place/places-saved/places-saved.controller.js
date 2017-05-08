function PlacesSavedController(PlaceFactory) {
  var ctrl = this;

  ctrl.$onInit = function() {
    ctrl.hasSavedPlaces = ctrl.places.length > 0;
  };

  ctrl.deleteAllPlaces = function() {
    PlaceFactory.deleteAllPlaces();
  };

  ctrl.deletePlace = function(event) {
    return PlaceFactory.deletePlace(event.place);
  };
}

module.exports = PlacesSavedController;
