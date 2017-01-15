function ActivityController () {
  var ctrl = this;

  ctrl.removeActivity = function() {
    this.onRemove({
      $event: {
        activity: this.activity
      }
    })
  };
};

angular
  .module('components.activity')
  .controller('ActivityController', ActivityController);
