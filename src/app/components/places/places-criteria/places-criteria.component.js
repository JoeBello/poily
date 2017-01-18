var placesCriteria = {
  bindings: {
    options: '<',
    onSubmit: '&'
  },
  templateUrl: 'app/components/places/places-criteria/places-criteria.html',
  controller: 'PlacesCriteriaController'
};

angular
  .module('components.places')
  .component('placesCriteria', placesCriteria);
