angular
  .element(document)
  .ready(function() {
    require("../scss/styles.scss");
    angular.bootstrap(document, [require('./root.module')]);
  });
