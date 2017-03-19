function AppController(AppConstant, AppStorageService, $rootScope) {
  var ctrl = this;

  angular.forEach(AppConstant, function(value, constant) {
    ctrl[constant] = AppConstant[constant];
  });

  ctrl.stops = AppStorageService.getActivities().length;

  ctrl.lastLocation = AppStorageService.getLastLocation();
  console.log(ctrl.lastLocation);

  $rootScope.$on('location_change', function(event, location) {
    event.stopPropagation();
    ctrl.lastLocation = location;
  })
  $rootScope.$on('stop_change', function(event, stops) {
    event.stopPropagation();
    ctrl.stops = stops;
  });


}

module.exports = AppController;
