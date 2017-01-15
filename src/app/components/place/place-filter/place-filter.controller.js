function PlaceFilterController (PlaceHelper) {
  var ctrl = this;

  // TODO zip in localStorage, otherwise generate one
  ctrl.zip = PlaceHelper.zipGen();

}

angular
  .module('components.place')
  .controller('PlaceFilterController', PlaceFilterController);
