var root = angular.module('root', [
  'ngAnimate',
  'ui.bootstrap',
  require('./app/app.module.js'),
  require('./components/components.module')
])
.component('root', require('./root.component'));

module.exports = root.name;
