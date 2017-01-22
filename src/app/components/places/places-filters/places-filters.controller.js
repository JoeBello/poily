function PlacesFiltersController ($localStorage) {
  var ctrl = this;

  ctrl.$onInit = function () {
    var lastSearch = $localStorage.project1.places.lastSearch,
        zipcode = lastSearch.zipcode || '',
        latitude = lastSearch.latitude || '',
        longitude = lastSearch.longitude || '',
        radius = lastSearch.radius || 10;

    ctrl.placesFilters = [
      {
        name: 'ATM',
        zipcode: zipcode || '',
        latitude: latitude || '',
        longitude: longitude || '',
        radius: radius,
        type: 'atm'
      },
      {
        name: 'Hospital',
        zipcode: zipcode || '',
        latitude: latitude || '',
        longitude: longitude || '',
        radius: radius,
        type: 'hospital'
      },
      {
        name: 'Taxi',
        zipcode: zipcode || '',
        latitude: latitude || '',
        longitude: longitude || '',
        radius: radius,
        type: 'taxi_stand'
      },
      {
        name: 'Train',
        zipcode: zipcode || '',
        latitude: latitude || '',
        longitude: longitude || '',
        radius: radius,
        type: 'train_station'
      },
      {
        name: 'Subway',
        zipcode: zipcode || '',
        latitude: latitude || '',
        longitude: longitude || '',
        radius: radius,
        type: 'subway_station'
      }
    ];
  }


}

angular
  .module('components.places')
  .controller('PlacesFiltersController', PlacesFiltersController);
