var placesCriteria = {
  bindings: {
    onSubmit: '&'
  },
  templateUrl: 'app/components/place/places-criteria/places-criteria.html',
  controller: 'PlacesCriteriaController'
};

angular
  .module('components.place')
  .component('placesCriteria', placesCriteria);
