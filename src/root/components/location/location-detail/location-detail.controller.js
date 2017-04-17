function LocationDetailController() {
  var ctrl = this;

  ctrl.zipLocate = function() {
    ctrl.onLocate({
      $event: {
        location: ctrl.location
      }
    });
  }

  ctrl.geolocate = function() {
    ctrl.onLocate({
      $event: {
        location: false
      }
    })
  }
}

module.exports = LocationDetailController;
