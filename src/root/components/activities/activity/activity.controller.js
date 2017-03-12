function ActivityController() {
  var ctrl = this;

  ctrl.removeActivity = function() {
    this.onRemove({
      $event: {
        activity: this.activity
      }
    })
  };
};

module.exports = ActivityController;
