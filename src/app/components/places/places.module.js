angular
  .module('components.places', [
    'ui.router'
  ])
  .constant('API', {
    places: 'http://localhost:3000/api/places?'
  });
