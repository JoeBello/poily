function PlacesSearchController($state) {
  var ctrl = this;

  ctrl.searchPlaces = function(event) {
    var criteria = event.criteria;
    $state.go('places', {
      location: criteria.zipcode,
      radius: criteria.radius,
      type: criteria.type.type
    });
  };


  ctrl.typeOptions = [
      {type: null, value: 'Let\'s see it all !'},
      {type: 'amusement_park', value: 'Amusement Park'},
      {type: 'art_gallery', value: 'Art Gallery'},
      {type: 'bank', value: 'Bank'},
      {type: 'campground', value: 'Campground'},
      {type: 'movie_theater', value: 'Movie Theater'},
      {type: 'cafe', value: 'Cafe'}
  ];

}

module.exports = PlacesSearchController;
