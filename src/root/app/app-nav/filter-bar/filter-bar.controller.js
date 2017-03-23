function FilterBarController(FilterBarConstant, AppStorageService, $state) {
  var ctrl = this;

  angular.forEach(FilterBarConstant, function(value, constant) {
    ctrl[constant] = FilterBarConstant[constant];
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

module.exports = FilterBarController;
