function LocationController() {
  var ctrl = this;

  ctrl.zipLocate = function zipLocate() {
    ctrl.onLocate({
      $event: {
        location: ctrl.location
      }
    });
  }

  ctrl.geolocate = function geoLocate() {
    ctrl.onLocate({
      $event: {
        location: false
      }
    })
  }
}

module.exports = LocationController;
