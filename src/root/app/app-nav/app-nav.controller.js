function AppNavController() {
  var ctrl = this;

  ctrl.selectPlaces = function() {
    this.onSelect({
      $event: {
        state: this.appNav.places.state
      }
    })
  }

  ctrl.toggleNav = function() {
    this.onToggle();
  }

}

module.exports = AppNavController;
