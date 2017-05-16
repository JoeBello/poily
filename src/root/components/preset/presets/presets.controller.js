function PresetsController(PresetConstant, AppStorageService, $scope, $state) {
  var ctrl = this;

  ctrl.$onInit = function onInit() {
    angular.forEach(PresetConstant, function(value, constant) {
      ctrl[constant] = PresetConstant[constant];
    });
  }

  ctrl.presetSearch = function presetSearch(event) {
    var lastLocation = AppStorageService.getLastLocation(),
        stateParams = {
          location: lastLocation,
          radius: 5,
          type: event.preset.type
        };

    $state.go(event.preset.state, stateParams);
  }

}

module.exports = PresetsController;
