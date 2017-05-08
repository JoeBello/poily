module.exports = {
  bindings: {
    onSelect: '&',
    preset: '<'
  },
  controller: require('./preset.controller'),
  template: require('./preset.html')
};
