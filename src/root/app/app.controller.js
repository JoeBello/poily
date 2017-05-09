function AppController(AppConstant, AppStorageService, $sce, $scope, $state) {
  var ctrl = this,
      year = new Date().getFullYear();

  ctrl.$onInit = function() {
    angular.forEach(AppConstant, function(value, constant) {
      ctrl[constant] = AppConstant[constant];
    });

    AppStorageService.init();

    ctrl.copyright = $sce.trustAsHtml(
                      '<span class="footer-copyright">Copyright &copy; ' +
                        year + ' Joseph Bello</span>'
                      );

    ctrl.navCollapsed = true;

    ctrl.placeCount = AppStorageService.getPlaceCount();
  }

  $scope.$on('places_change', function(event, placeCount) {
    ctrl.placeCount = placeCount;
  });

  ctrl.go = function(event) {
    var lastLocation = AppStorageService.getLastLocation(),
        stateParams = {
          location: lastLocation,
          radius: null,
          type: null
        };

    $state.go(event.source.state, stateParams);
  }

}

module.exports = AppController;
