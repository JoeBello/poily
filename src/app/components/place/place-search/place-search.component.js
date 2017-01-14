var placesSearch = {
  templateUrl:  'app/components/place/place-search/place-search.html',
  controller: 'PlacesSearchController'
};

angular
  .module('components.place')
  .component('placesSearch', placesSearch)
  .config(function($stateProvider) {
    $stateProvider
      .state('search', {
        parent: 'app',
        url: '/search',
        component: 'placesSearch'
      });
  });
