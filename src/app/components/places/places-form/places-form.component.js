var placesForm = {
  bindings: {
    options: '<',
    onSubmit: '&'
  },
  templateUrl: 'app/components/places/places-form/places-form.html',
  controller: 'PlacesFormController'
};

angular
  .module('components.places')
  .component('placesForm', placesForm);
