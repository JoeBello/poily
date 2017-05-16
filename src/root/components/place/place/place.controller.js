function PlaceController() {
  var ctrl = this;

  ctrl.selectPlace = function selectPlace() {
    this.onSelect({
      $event: {
        place: this.place
      }
    })
  };
}

module.exports = PlaceController;
