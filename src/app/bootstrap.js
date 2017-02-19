angular
  .element(document)
  .ready(function() {
    require('../../node_modules/angular-material/angular-material.min.css');
    require('../css/project1.css');
    angular.bootstrap(document, [require('./root.module')]);
  });
