function PlaceController() {
  var ctrl = this;

  ctrl.selectPlace = function () {
    this.onSelect({
      $event: {
        place: this.place
      }
    })
  };

}


angular
  .module('components.places')
  .controller('PlaceController', PlaceController);
