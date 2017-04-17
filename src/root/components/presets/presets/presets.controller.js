function PresetsController(PresetsConstant, AppStorageService, $state, $scope) {
  var ctrl = this;

  ctrl.$onInit = function() {
    angular.forEach(PresetsConstant, function(value, constant) {
      ctrl[constant] = PresetsConstant[constant];
    });

    ctrl.lastLocation = AppStorageService.getLastLocation();
  }

  $scope.$on('location_change', function(event, location) {
    ctrl.lastLocation = location;
  })

  ctrl.presetSearch = function(event) {
    var stateParams = {
      location: ctrl.lastLocation,
      radius: 5,
      type: event.preset.type
    };

    $state.go(event.preset.state, stateParams);
  }

}

module.exports = PresetsController;
