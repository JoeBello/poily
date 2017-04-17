function LocationController($state, LocationFactory) {
  var ctrl = this;

  ctrl.searchLocation = function(event) {
    if (!event.location) {
      LocationFactory.geolocate()
      .then(function(coordinates) {
        $state.go('places', {
          location: coordinates,
          radius: null,
          type: null
        });
      });
    }

    $state.go('places', {
      location: event.location,
      radius: null,
      type: null
    });
  }
}

module.exports = LocationController;
