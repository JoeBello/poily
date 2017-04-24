function AppNavController() {
  var ctrl = this;

  ctrl.selectPlaces = function() {
    this.onSelect({
      $event: {
        state: this.appNav.places.state
      }
    })
  }

}

module.exports = AppNavController;
