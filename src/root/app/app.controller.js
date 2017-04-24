function AppController(AppConstant, AppStorageService, $state, $scope) {
  var ctrl = this;

  ctrl.$onInit = function() {
    angular.forEach(AppConstant, function(value, constant) {
      ctrl[constant] = AppConstant[constant];
    });

    AppStorageService.init();

    ctrl.placeCount = AppStorageService.getPlaceCount();

    ctrl.lastLocation = AppStorageService.getLastLocation();

    ctrl.navCollapsed = true;
  }

  $scope.$on('places_change', function(event, placeCount) {
    ctrl.placeCount = placeCount;
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
