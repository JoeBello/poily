function PresetsController(PresetConstant, PresetService, $scope, $state) {
  var ctrl = this;

  ctrl.$onInit = function onInit() {
    angular.forEach(PresetConstant,
      function eachPresetConstant(value, constant) {
        ctrl[constant] = PresetConstant[constant];
      });

      PresetService.init();
  }

  ctrl.presetSearch = function presetSearch(event) {
    var lastLocation = PresetService.getLastLocation(),
        stateParams = {
          location: lastLocation,
          type: event.preset.type
        };

    $state.go(event.preset.state, stateParams);
  }
}

module.exports = PresetsController;
