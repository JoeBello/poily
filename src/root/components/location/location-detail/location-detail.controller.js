function LocationController($state, LocationFactory) {
  var ctrl = this;

  ctrl.geoDirect = function geoDirect() {
    LocationFactory.geolocate()
    .then(function(location) {
      $state.go('places', {
        error: null,
        location: location,
        radius: null,
        type: null
      });
    })
    .catch(function(error) {
      $state.go('places', {
        error: error
      });
    })
  };

  ctrl.searchLocation = function searchLocation(event) {
    if (!event.location) {
      return ctrl.geoDirect();
    }

    $state.go('places', {
      error: null,
      location: event.location,
      radius: null,
      type: null
    });
  }
}

module.exports = LocationController;
