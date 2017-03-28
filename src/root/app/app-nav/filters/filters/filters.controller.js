function FiltersController(FiltersConstant, AppStorageService, $state) {
  var ctrl = this;

  angular.forEach(FiltersConstant, function(value, constant) {
    ctrl[constant] = FiltersConstant[constant];
  });

  ctrl.filterResults = function(event) {
    var lastLocation = AppStorageService.getLastLocation();
    console.log(event);
    $state.go(event.filter.state, {
      location: lastLocation,
      radius: 5,
      type: event.filter.type
    })
  }

}

module.exports = FiltersController;
