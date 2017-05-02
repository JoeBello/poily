function AppController(AppConstant, AppStorageService, $state, $scope) {
  var ctrl = this;

  ctrl.$onInit = function() {
    angular.forEach(AppConstant, function(value, constant) {
      ctrl[constant] = AppConstant[constant];
    });

    AppStorageService.init();

    ctrl.navCollapsed = true;

    ctrl.placeCount = AppStorageService.getPlaceCount();

  }

  $scope.$on('places_change', function(event, placeCount) {
    ctrl.placeCount = placeCount;
  });

  ctrl.go = function(event) {
    var lastLocation = AppStorageService.getLastLocation(),
        stateParams = {
          location: lastLocation,
          type: null,
          radius: null
        };

    $state.go(event.source.state, stateParams);
  }

}

module.exports = AppController;
