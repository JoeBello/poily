var PlacesFormController = function() {
  var ctrl = this;

  ctrl.submitForm = function() {
    ctrl.onSubmit({
      $event: {
        criteria: ctrl.criteria
      }
    });
  };

};

angular
  .module('components.places')
  .controller('PlacesFormController', PlacesFormController);
