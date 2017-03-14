function AppController(AppNavConstant) {
  var ctrl = this;

  angular.forEach(AppNavConstant, function(value, constant) {
    ctrl[constant] = AppNavConstant[constant];
  });

}

module.exports = AppController;
