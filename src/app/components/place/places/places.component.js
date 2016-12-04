var places = {
  templateUrl: 'app/components/place/places/places.html'
};

angular
  .module('components.place')
  .component('places', places)
  .config(function ($stateProvider) {
    $stateProvider
      .state('places', {
        parent: 'app',
        url: '/places',
        component: 'places'
      });
  });
