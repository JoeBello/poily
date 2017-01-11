function AppController ($localStorage, $state) {
  var ctrl = this;

  ctrl.$onInit = function () {
    $localStorage.project1 = $localStorage.project1 || {};
  };
  
};

angular
  .module('common')
  .controller('AppController', AppController);
