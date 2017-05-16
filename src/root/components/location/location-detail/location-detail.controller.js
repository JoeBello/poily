function LocationController($state, LocationFactory) {
  var ctrl = this;

  ctrl.geoDirect = function geoDirect() {
    LocationFactory.geolocate()
    .then(function(location) {
      $state.go('places', {
        location: location,
        radius: null,
        type: null
      });
    });
  };

  ctrl.searchLocation = function searchLocation(event) {
    if (!event.location) {
      return ctrl.geoDirect();
    }

    $state.go('places', {
      location: event.location,
      radius: null,
      type: null
    });
  }
}

module.exports = LocationController;
