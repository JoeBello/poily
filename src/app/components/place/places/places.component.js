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
  .constant('API', {
    'places': 'http://localhost:3000/api/places?',
    'userPlaces': 'http://localhost:3000/api/userPlaces?'
  })
  .config(function ($stateProvider) {
    $stateProvider
      .state('places', {
        parent: 'app',
        url: '/places',
        component: 'places',
        resolve: {
          places: function (PlaceService) {
            console.log('incoming data...');
            return PlaceService.getPlaceTest();
          }
        }
      });
  });
