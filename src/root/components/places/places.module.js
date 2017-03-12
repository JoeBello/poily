var placesComponents = angular.module('components.places', [
    'ui.router'
  ])
  .constant('API', {
    places: 'http://localhost:3001/api/places?'
  })
  .factory('PlacesServiceGeocoder', require('./places.service.geocoder'))
  .factory('PlacesService', require('./places.service'))
  .component('places', require('./places/places.component'))
  .component('place', require('./place/place.component'))
  .config(function($stateProvider) {
    $stateProvider
      .state('places', {
        parent: 'app',
        url: '/places?zipcode&latitude&longitude&radius&type',
        component: 'places',
        resolve: {
          places: function($stateParams, PlacesService) {
            if ($stateParams.zipcode || ($stateParams.latitude && $stateParams.longitude))
            {
              return PlacesService.searchPlaces($stateParams);
            } else {
              return PlacesService.geolocatePlaces();
            }
          }
        }
      });
    })
    .component('placesSearch', require('./places-search/places-search.component'))
    .component('placesForm', require('./places-form/places-form.component'))
    .config(function($stateProvider) {
      $stateProvider
        .state('search', {
          parent: 'app',
          url: '/search',
          component: 'placesSearch',
          params: {
            error: null
          },
          resolve: {
            error: function ($stateParams) {
              return $stateParams.error;
            }
          }
        });
    });

module.exports = placesComponents.name;
