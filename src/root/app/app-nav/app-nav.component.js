module.exports = {
  bindings: {
    brand: '<',
    appNav: '<',
    stops: '<',
    userNav: '<',
    onSelect: '&'
  },
  template: require('./app-nav.html'),
  controller: require('./app-nav.controller')
};
