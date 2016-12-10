function PlaceController() {
  var ctrl = this;

  ctrl.selectActivity = function () {
    this.onSelect({
      $event: {
        place: this.place
      }
    })
  };

  ctrl.removeActivity = function () {
    this.onRemove({
      $event: {
        place: this.place
      }
    })
  };

}


angular
  .module('components.place')
  .controller('PlaceController', PlaceController);
