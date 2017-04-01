function FiltersController(FiltersConstant, AppStorageService, $state) {
  var ctrl = this;

  ctrl.$onInit = function() {
    angular.forEach(FiltersConstant, function(value, constant) {
      ctrl[constant] = FiltersConstant[constant];
    });
  }

  ctrl.filterResults = function(event) {
    var lastLocation = AppStorageService.getLastLocation(),
        stateParams = {
          radius: 5,
          type: event.filter.type
        };

    if (lastLocation !== null) {
      stateParams.location = lastLocation;
    }

    $state.go(event.filter.state, stateParams);
  }

}

module.exports = FiltersController;
