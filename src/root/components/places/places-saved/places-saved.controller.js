function PlacesSavedController(PlacesFactory) {
  var ctrl = this;

  ctrl.$onInit = function() {
    ctrl.hasSavedPlaces = ctrl.places.length > 0;
  };

  ctrl.deleteAllPlaces = function() {
    PlacesFactory.deleteAllPlaces();
  };

  ctrl.deletePlace = function(event) {
    return PlacesFactory.deletePlace(event.place);
  };
}

module.exports = PlacesSavedController;
