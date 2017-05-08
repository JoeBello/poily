module.exports = {
  bindings: {
    onSelect: '&',
    place: '<'
  },
  controller: require('./place.controller'),
  template: require('./place.html')
};
