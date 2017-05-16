function AppController(AppConstant, AppStorageService, $sce, $scope, $state) {
  var ctrl = this;

  ctrl.$onInit = function onInit() {
    angular.forEach(AppConstant, function eachAppConstant(value, constant) {
      ctrl[constant] = AppConstant[constant];
    });

    AppStorageService.init();

    ctrl.copyrightDate = new Date().getFullYear();

    ctrl.placeCount = AppStorageService.getPlaceCount();
  }

  ctrl.navigate = function navigate(event) {
    var lastLocation = AppStorageService.getLastLocation(),
        stateParams = {
          location: lastLocation,
          radius: null,
          type: null
        };

    $state.go(event.source.state, stateParams);
  }

  $scope.$on('places_change', function placesChangeHandler(event, placeCount) {
    ctrl.placeCount = placeCount;
  });

}

module.exports = AppController;
