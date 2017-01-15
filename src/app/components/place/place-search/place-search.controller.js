function PlaceSearchController ($state) {
  var ctrl = this;

  ctrl.searchPlaces = function(event) {
    var criteria = event.criteria;
    
    $state.go('places', {
      zipcode: criteria.zipcode,
      radius: criteria.radius,
      type: criteria.type
    });
  };

}

angular
  .module('components.place')
  .controller('PlaceSearchController', PlaceSearchController)
