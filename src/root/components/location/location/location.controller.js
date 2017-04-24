function LocationController($state, LocationFactory) {
  var ctrl = this;

  ctrl.searchLocation = function(event) {
    $state.go('places', {
      location: event.location || null,
      radius: null,
      type: null
    });
  }
}

module.exports = LocationController;
