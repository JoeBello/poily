var placesCriteria = {
  bindings: {
    options: '<',
    onSubmit: '&'
  },
  templateUrl: 'app/components/place/place-criteria/place-criteria.html',
  controller: 'PlacesCriteriaController'
};

angular
  .module('components.place')
  .component('placesCriteria', placesCriteria);
