function PlacesFiltersController ($localStorage) {
  var ctrl = this,
      storage = $localStorage.project1.places,
      zipcode = storage.lastSearch.zipcode || '',
      lat = storage.lastCoordinates.lat || '',
      lng = storage.lastCoordinates.lng || '',
      radius = 10;

  ctrl.placesFilters = [
  {
    name: 'ATM',
    zipcode: zipcode || '',
    lat: lat || '',
    lng: lng || '',
    radius: radius,
    type: 'atm'
  },
  {
    name: 'Hospital',
    zipcode: zipcode || '',
    lat: lat || '',
    lng: lng || '',
    radius: radius,
    type: 'hospital'
  },
  {
    name: 'Taxi',
    zipcode: zipcode || '',
    lat: lat || '',
    lng: lng || '',
    radius: radius,
    type: 'taxi_stand'
  },
  {
    name: 'Train',
    zipcode: zipcode || '',
    lat: lat || '',
    lng: lng || '',
    radius: radius,
    type: 'train_station'
  },
  {
    name: 'Subway',
    zipcode: zipcode || '',
    lat: lat || '',
    lng: lng || '',
    radius: radius,
    type: 'subway_station'
  }
];

}

angular
  .module('components.places')
  .controller('PlacesFiltersController', PlacesFiltersController);
