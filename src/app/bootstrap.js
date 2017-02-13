require('../css/project1.css');

angular
  .element(document)
  .ready(function() {
    angular.bootstrap(document, [require('./root.module')])
    console.log('bootstrapping application...')
  });
