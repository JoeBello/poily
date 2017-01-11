function PlacesSearchController ($state) {
  var ctrl = this;

  ctrl.searchPlaces = function(event) {
    // var criteria = event.criteria,
    //     searchParams = {
    //       address: criteria.address,
    //       zipcode: criteria.zipcode,
    //       radius: criteria.radius,
    //       type: criteria.type
    //     };

    // console.log(searchParams);
    $state.go('places', {param1: 'hello'});
  };

}

angular
  .module('components.place')
  .controller('PlacesSearchController', PlacesSearchController)
