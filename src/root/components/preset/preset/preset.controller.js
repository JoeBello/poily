function PresetController() {
  var ctrl = this;

  ctrl.selectPreset = function() {
    this.onSelect({
      $event: {
        preset: this.preset
      }
    })
  };
}

module.exports = PresetController;
