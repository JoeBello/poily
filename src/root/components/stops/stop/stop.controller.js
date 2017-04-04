function StopController() {
  var ctrl = this;

  ctrl.removeStop = function() {
    this.onRemove({
      $event: {
        stop: this.stop
      }
    })
  };
};

module.exports = StopController;
