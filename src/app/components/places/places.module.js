angular
  .module('components.places', [
    'ui.router'
  ])
  .value('API', {
    places: 'http://localhost:3000/api/places?'
  });
