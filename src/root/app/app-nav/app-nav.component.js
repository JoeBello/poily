module.exports = {
  bindings: {
    brand: '<',
    appNav: '<',
    navCollapsed: '<',
    placeCount: '<',
    userNav: '<',
    onNavigate: '&'
  },
  template: require('./app-nav.html'),
  controller: require('./app-nav.controller')
};
