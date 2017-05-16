function AppNavController($scope) {
  var ctrl = this;

  ctrl.navigate = function navigate(source) {
    this.onNavigate({
      $event: {
        source: source
      }
    })
  };

}

module.exports = AppNavController;
