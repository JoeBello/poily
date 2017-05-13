module.exports = {
  bindings: {
    appNav: '<',
    brand: '<',
    onNavigate: '&',
    placeCount: '<',
    userNav: '<'
  },
  controller: require('./app-nav.controller'),
  template: require('./app-nav.html')
};
