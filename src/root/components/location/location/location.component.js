module.exports = {
  bindings: {
    onLocate: '&'
  },
  controller: require('./location.controller'),
  template: require('./location.html')
};
