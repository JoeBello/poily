var common = angular.module('common', [
    'ui.router',
    'ngStorage'
  ])
  .constant('AppConstant', require('./app.constant'))
  .factory('AppStorageService', require('./app-storage.service'))
  .component('app', require('./app.component'))
  .component('appNav', require('./app-nav/app-nav.component'))
  .component('filterBar', require('./app-nav/filter-bar/filter-bar.component'))
  .config(require('./app.state'));

module.exports = common.name;
