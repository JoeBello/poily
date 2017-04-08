function AppScrollController($anchorScroll, $window, $scope) {
    var ctrl = this,
        $win = angular.element($window);

    ctrl.active = false;

    $win.on('scroll', function(e) {
      if (e.pageY > 400) {
        ctrl.active = true;
      } else {
        ctrl.active = false;
      }

      $scope.$applyAsync();
    })

    ctrl.top = function() {
      $anchorScroll('main');
    }
}

module.exports = AppScrollController;
