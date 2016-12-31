var places = {
  bindings: {
    places: '<'
  },
  templateUrl: 'app/components/place/places/places.html',
  controller: 'PlacesController'
};

angular
  .module('components.place')
  .component('places', places)
  .config(function ($stateProvider) {
    $stateProvider
      .state('places', {
        parent: 'app',
        url: '/places',
        component: 'places',
        // TODO resolve causes geolocating even when using back button, find alternative
        resolve: {
          places: function (PlaceService) {
            return PlaceService.getPlaces();
          }
        }
      });
  });
