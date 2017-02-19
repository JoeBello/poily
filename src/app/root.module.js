var root = angular.module('root', [
    'ngMaterial',
    require('./common/app.module.js'),
    require('./components/components.module')
])
  .component('root', require('./root.component'))
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('pink')
      .accentPalette('orange');
  });
module.exports = root.name;
