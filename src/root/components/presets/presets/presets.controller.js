function PresetsController(PresetsConstant, AppStorageService, $state) {
  var ctrl = this;

  ctrl.$onInit = function() {
    angular.forEach(PresetsConstant, function(value, constant) {
      ctrl[constant] = PresetsConstant[constant];
    });
  }

  ctrl.presetSearch = function(event) {
    var lastLocation = AppStorageService.getLastLocation();
    var stateParams = {
      location: lastLocation,
      radius: 5,
      type: event.preset.type
    };

    $state.go(event.preset.state, stateParams);
  }

}

module.exports = PresetsController;
