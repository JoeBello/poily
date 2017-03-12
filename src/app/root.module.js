var root = angular.module('root', [
    'ngAnimate',
    'ui.bootstrap',
    require('./common/app.module.js'),
    require('./components/components.module')
])
  .component('root', require('./root.component'));

module.exports = root.name;
