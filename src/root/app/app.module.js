var common = angular.module('common', [
  'angular-loading-bar',
  'ngStorage',
  'ui.router'
])
.constant('AppConstant', require('./app.constant'))
.factory('AppService', require('./app.service'))
.directive('autoCollapse', require('./app-nav/auto-collapse.directive'))
.component('app', require('./app.component'))
.component('appNav', require('./app-nav/app-nav.component'))
.component('appFooter', require('./app-footer/app-footer.component'))
.config(require('./app.state'));

module.exports = common.name;
