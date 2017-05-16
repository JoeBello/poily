function AppScrollController($anchorScroll, $scope, $window) {
  var ctrl = this,
      win = angular.element($window);

  ctrl.$onInit = function onInit() {
    ctrl.active = false;
  }
  
  win.on('scroll', function onScroll(event) {
    if (event.pageY > 400) {
      ctrl.active = true;
    } else {
      ctrl.active = false;
    }

    $scope.$applyAsync();
  })

  ctrl.top = function top() {
    $anchorScroll('top');
  }
}

module.exports = AppScrollController;
