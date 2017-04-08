var common = angular.module('common', [
    'ui.router',
    'ngStorage'
  ])
  .constant('AppConstant', require('./app.constant'))
  .factory('AppStorageService', require('./app-storage.service'))
  .component('app', require('./app.component'))
  .component('appNav', require('./app-nav/app-nav.component'))
  .component('appScroll', require('./app-scroll/app-scroll.component'))
  .constant('FiltersConstant',
    require('./app-nav/filters/filters.constant'))
  .component('filters', require('./app-nav/filters/filters/filters.component'))
  .component('filter', require('./app-nav/filters/filter/filter.component'))
  .config(require('./app.state'));

module.exports = common.name;
