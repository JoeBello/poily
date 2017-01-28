var placesFilter = {
  bindings: {
    filter: '<'
  },
  templateUrl: 'app/components/places/places-filter/places-filter.html'
};

angular
  .module('components.places')
  .component('placesFilter', placesFilter);
