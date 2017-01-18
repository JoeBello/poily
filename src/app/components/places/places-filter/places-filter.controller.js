function PlacesFilterController (PlacesHelper) {
  var ctrl = this;

  // TODO zip in localStorage, otherwise generate one
  ctrl.zip = PlacesHelper.zipGen();

}

angular
  .module('components.places')
  .controller('PlacesFilterController', PlacesFilterController);
