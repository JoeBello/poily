var place = {
  bindings: {
    place: '<',
    onSelect: '&'
  },
  templateUrl: 'app/components/places/place/place.html',
  controller: 'PlaceController'
};

angular
  .module('components.places')
  .component('place', place)
