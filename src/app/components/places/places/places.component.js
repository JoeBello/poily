var places = {
  bindings: {
    places: '<'
  },
  templateUrl: 'app/components/places/places/places.html',
  controller: 'PlacesController'
};

angular
  .module('components.places')
  .component('places', places)
  .config(function($stateProvider) {
    $stateProvider
      .state('places', {
        parent: 'app',
        url: '/places?zipcode&lat&lng&radius&type',
        resolve: {
          places: function($stateParams, PlacesService) {
            console.log($stateParams);
            if ($stateParams.zipcode || ($stateParams.lat && $stateParams.lng))
            {
              return PlacesService.searchPlaces($stateParams);
            } else {
              return PlacesService.geolocatePlaces();
            }
          }
        },
        views: {
          'filters': {
            component: 'placesFilters'
          },
          'main':{
            component: 'places'
          }
        }
      });
  })
  .run(function($localStorage) {
    $localStorage.project1.places = $localStorage.project1.places || {};
  });
