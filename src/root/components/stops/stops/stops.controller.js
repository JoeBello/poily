function StopsController(StopsService) {
  var ctrl = this;

  ctrl.hasStops = function() {
    return ctrl.stops.length > 0;
  };

  ctrl.clearStops = function() {
    StopsService.destroyStops();
  };

  ctrl.removeStop = function(event) {
    var stop = event.stop;
    StopsService.destroyStop(stop);
  };

}

module.exports = StopsController;
