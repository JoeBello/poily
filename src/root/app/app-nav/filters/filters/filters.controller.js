function FiltersController(FiltersConstant, AppStorageService, $state, $scope) {
  var ctrl = this;

  ctrl.$onInit = function() {
    angular.forEach(FiltersConstant, function(value, constant) {
      ctrl[constant] = FiltersConstant[constant];
    });

    ctrl.lastLocation = AppStorageService.getLastLocation();
  }

  $scope.$on('location_change', function(event, location) {
    ctrl.lastLocation = location;
  })

  ctrl.filterResults = function(event) {
    var stateParams = {
      radius: 5,
      type: event.filter.type
    };

    stateParams.location = ctrl.lastLocation;


    $state.go(event.filter.state, stateParams);
  }

}

module.exports = FiltersController;
