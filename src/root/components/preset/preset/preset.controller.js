function PresetController() {
  var ctrl = this;

  ctrl.selectPreset = function selectPreset() {
    this.onSelect({
      $event: {
        preset: this.preset
      }
    })
  };
}

module.exports = PresetController;
