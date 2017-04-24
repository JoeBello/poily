module.exports = {
  bindings: {
    brand: '<',
    appNav: '<',
    navCollapsed: '<',
    placeCount: '<',
    userNav: '<',
    onSelect: '&'
  },
  template: require('./app-nav.html'),
  controller: require('./app-nav.controller')
};
