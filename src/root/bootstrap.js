angular
  .element(document)
  .ready(function blastOff() {
    require('../scss/styles.scss');
    angular.bootstrap(document, [require('./root.module')]);
  });
