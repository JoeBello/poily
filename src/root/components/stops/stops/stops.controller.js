function StopsController(StopsService) {
  var ctrl = this;

  ctrl.$onInit = function() {
    ctrl.hasStops = ctrl.stops.length > 0;
  };

  ctrl.removeStops = function() {
    StopsService.destroyStops();
  };

  ctrl.removeStop = function(event) {
    var stop = event.stop;
    StopsService.destroyStop(stop);
  };

}

module.exports = StopsController;
