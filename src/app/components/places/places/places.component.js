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
        url: '/places?zipcode&latitude&longitude&radius&type',
        resolve: {
          places: function($stateParams, PlacesService) {
            if ($stateParams.zipcode || ($stateParams.latitude && $stateParams.longitude))
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
  });
