function AppController(AppConstant, AppStorageService, $rootScope) {
  var ctrl = this;

  angular.forEach(AppConstant, function(value, constant) {
    ctrl[constant] = AppConstant[constant];
  });

  ctrl.stops = AppStorageService.getActivities().length;

  $rootScope.$on('stops', function(event, data) {
    event.stopPropagation();
    ctrl.stops = data;
  });


}

module.exports = AppController;
