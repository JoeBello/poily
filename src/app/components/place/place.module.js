angular
  .module('components.place', [
    'ui.router'
  ])
  .constant('placesAPI', 'http://localhost:3000/api/places?');
