module.exports = {
  bindings: {
    options: '<',
    onSubmit: '&'
  },
  template: require('./places-form.html'),
  controller: require('./places-form.controller')
};
