function PlacesController () {
  var ctrl = this;
  var results = ctrl.places;
}

angular
  .module('components.place')
  .controller('PlacesController', PlacesController);
