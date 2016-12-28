function PlaceService ($window, $q, $http, $httpParamSerializer, API) {

  // TODO break geocoder into seperate service
  // TODO cache next_page_token
  function geocodeUser () {
    var geocoder = $window.navigator.geolocation;

    if ("geolocation" in navigator) {

      var coordinates = {},
          deferred = $q.defer();

      geocoder.getCurrentPosition(
        function (position) {
        coordinates.latitude = position.coords.latitude;
        coordinates.longitude = position.coords.longitude;
        deferred.resolve(coordinates);
      }
        // TODO
        // function() {
        //   // do something if user denies permission
        // }
    )
      return deferred.promise

    } else {
      coordinates.error = 'geolocation failed.'
      deferred.resolve(coordinates);
    }
  };

  function getUrl(searchParams, type) {
    var uri = API[type];
    console.log(uri + $httpParamSerializer(searchParams));
    return  uri + $httpParamSerializer(searchParams);

  };

  function extractPlaces(response) {
    return response.data.results;
  };


  function defaultSearch () {
    return geocodeUser()
    .then(function (coordinates) {
        if (!coordinates.error) {
          var url = getUrl(coordinates, 'places');
          return url;
        } else {
          // TODO do something else, go to a different state
        }
    })
    .then(function (url) {
      return $http.get(url).then(extractPlaces);
    });
  };

  // TODO custom search and return object operations
  // TODO modify search urls to accomodate refactored backend

// RETURN OBJECT
  return {
    getPlaceList: function () {
      return data;
    },
    getPlaceByCity: function (city) {
      return data[0].City === city;
    },
    getPlaces: function () {
      return defaultSearch();
    }
  };

}

angular
  .module('components.place')
  .service('PlaceService', PlaceService);
