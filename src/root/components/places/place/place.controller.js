function PlaceController() {
  var ctrl = this;

  ctrl.selectPlace = function() {
    this.onSelect({
      $event: {
        place: this.place
      }
    })
  };

}

module.exports = PlaceController;
