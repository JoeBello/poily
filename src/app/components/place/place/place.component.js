var place = {
  bindings: {
    place: '<',
    onSelect: '&',
    onRemove: '&'
  },
  templateUrl: 'app/components/place/place/place.html',
  controller: 'PlaceController'
};

angular
  .module('components.place')
  .component('place', place)
