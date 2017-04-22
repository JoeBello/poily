function PlacesSavedController(PlacesFactory) {
  var ctrl = this;

  ctrl.$onInit = function() {
    ctrl.hasSavedPlaces = ctrl.places.length > 0;
  };

  ctrl.deleteAllPlaces = function() {
    PlacesFactory.deleteAllPlaces();
  };

  ctrl.deletePlace = function(event) {
    var place = event.place;
    PlacesFactory.deletePlace(place);
  };

}

module.exports = PlacesSavedController;
