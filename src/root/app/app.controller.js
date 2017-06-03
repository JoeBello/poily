function AppController(AppConstant, AppService, $sce, $scope, $state) {
  var ctrl = this;

  ctrl.$onInit = function onInit() {
    angular.forEach(AppConstant, function eachAppConstant(value, constant) {
      ctrl[constant] = AppConstant[constant];
    });

    AppService.init();

    ctrl.copyrightDate = new Date().getFullYear();

    ctrl.placeCount = AppService.getPlaceCount();
  }

  ctrl.navigate = function navigate(event) {
    var stateParams = AppService.getLastSearch() || {};

    $state.go(event.source.state, stateParams);
  }

  $scope.$on('saved_count', function placesChangeHandler(event, placeCount) {
    ctrl.placeCount = placeCount;
  });

}

module.exports = AppController;
