var placesComponents = angular.module('components.places', [
    'ui.router'
  ])
  .constant('API', {
    places: 'http://localhost:3001/api/places?'
  })
  .filter('underscoreReplace', require('./underscoreReplace.filter'))
  .factory('PlacesFactory', require('./places.factory'))
  .component('places', require('./places/places.component'))
  .component('place', require('./place/place.component'))
  .config(require('./places.state'));

module.exports = placesComponents.name;
