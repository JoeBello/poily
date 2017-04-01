function AppController(AppConstant, AppStorageService, $rootScope, $scope) {
  var ctrl = this;

  ctrl.$onInit = function() {
    angular.forEach(AppConstant, function(value, constant) {
      ctrl[constant] = AppConstant[constant];
    });

    ctrl.stops = AppStorageService.getActivities().length;

    ctrl.lastLocation = AppStorageService.getLastLocation();
  }

  $scope.$on('location_change', function(event, location) {
    ctrl.lastLocation = location;
  })

  $scope.$on('stop_change', function(event, stops) {
    ctrl.stops = stops.length;
  });


}

module.exports = AppController;
