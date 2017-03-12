function PlacesFormController() {
  var ctrl = this;

  ctrl.submitForm = function() {
    ctrl.onSubmit({
      $event: {
        criteria: ctrl.criteria
      }
    });
  };

};

module.exports = PlacesFormController;
