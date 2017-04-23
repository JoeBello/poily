module.exports = {
  bindings: {
    brand: '<',
    appNav: '<',
    navCollapsed: '<',
    placeCount: '<',
    userNav: '<',
    onSelect: '&',
    onToggle: '&'
  },
  template: require('./app-nav.html'),
  controller: require('./app-nav.controller')
};
