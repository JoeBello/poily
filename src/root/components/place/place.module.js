var placesComponents = angular.module('components.places', [
  'ui.router'
])
.constant('API', {
  one: '/api/places/',
  collection: '/api/places/collection?',
  places: '/api/places?'
})
.filter('underscoreReplace', require('./underscoreReplace.filter'))
.filter('trustHtml', require('./trustHtml.filter.js'))
.factory('PlaceFactory', require('./place.factory'))
.component('place', require('./place/place.component'))
.component('places', require('./places/places.component'))
.config(require('./places/places.state'))
.component('placesSaved', require('./places-saved/places-saved.component'))
.config(require('./places-saved/places-saved.state'));

module.exports = placesComponents.name;
