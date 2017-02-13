var root = angular.module('root', [
    require('./common/app.module.js'),
    require('./components/components.module')
  ])
  .component('root', require('./root.component'));

module.exports = root.name;
