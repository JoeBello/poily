var PlacesCriteriaController = function() {
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
  .module('components.place')
  .controller('PlacesCriteriaController', PlacesCriteriaController);
