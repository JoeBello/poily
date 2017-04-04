var placesComponents = angular.module('components.places', [
    'ui.router'
  ])
  .constant('API', {
    places: 'http://localhost:3001/api/places?'
  })
  .constant('PlaceTypes', require('./places-search/places-search.constant'))
  .filter('underscoreToSpace', require('./underscore-to-space.filter'))
  .factory('PlacesServiceGeocoder', require('./places.service.geocoder'))
  .factory('PlacesService', require('./places.service'))
  .component('places', require('./places/places.component'))
  .component('place', require('./place/place.component'))
  .component('placesSearch', require('./places-search/places-search.component'))
  .component('placesForm', require('./places-form/places-form.component'))
  .config(require('./places.state'));

module.exports = placesComponents.name;
