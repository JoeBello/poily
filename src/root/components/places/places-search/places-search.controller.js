function PlacesSearchController($state, PlaceTypes) {
  var ctrl = this;

  ctrl.$onInit = function() {
    ctrl.typeOptions = [];

    angular.forEach(PlaceTypes, function(value, type) {
      ctrl.typeOptions.push({
        type: value.type,
        value: value.value
      });
    })
  }

  ctrl.searchPlaces = function(event) {
    var criteria = event.criteria;
    $state.go('places', {
      location: criteria.zipcode,
      radius: criteria.radius,
      type: criteria.type.type
    });
  };
}

module.exports = PlacesSearchController;
