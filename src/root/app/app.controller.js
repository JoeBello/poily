function AppController(AppConstant, AppStorageService, $state, $scope) {
  var ctrl = this;

  ctrl.$onInit = function() {
    angular.forEach(AppConstant, function(value, constant) {
      ctrl[constant] = AppConstant[constant];
    });

    AppStorageService.init();

    ctrl.stops = AppStorageService.stopCount();

    ctrl.lastLocation = AppStorageService.getLastLocation();
  }

  $scope.$on('stop_change', function(event, stops) {
    ctrl.stops = stops;
  });

  $scope.$on('location_change', function(event, location) {
    ctrl.lastLocation = location;
  })

  ctrl.goPlaces = function(event) {
    var stateParams = {
      location: ctrl.lastLocation
    };

    $state.go(event.state, stateParams);
  }
}

module.exports = AppController;
