module.exports = {
  bindings: {
    appNav: '<',
    brand: '<',
    navCollapsed: '<',
    onNavigate: '&',
    placeCount: '<',
    userNav: '<'
  },
  controller: require('./app-nav.controller'),
  template: require('./app-nav.html')
};
