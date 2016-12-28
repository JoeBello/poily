angular
  .module('components.place', [
    'ui.router'
  ])
  .constant('API', {
    'places': 'http://localhost:3000/api/places?',
    'userPlaces': 'http://localhost:3000/api/userPlaces?'
  });
