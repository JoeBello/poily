function AppNavController() {
  var ctrl = this;

  ctrl.navigate = function(source) {
    this.onNavigate({
      $event: {
        source: source
      }
    })
  };

}

module.exports = AppNavController;
