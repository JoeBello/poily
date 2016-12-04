function PlaceService ($window, $q, $http, $httpParamSerializer, API) {

  // TODO break geocoder into seperate service
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
    var url = API[type];
    return  url + $httpParamSerializer(searchParams);
  };

  function extractPlaces(response) {
    console.log(response.data)
    return response.data.results;
  };


  function defaultSearch () {
    return geocodeUser()
    .then(function (coordinates) {
        if (!coordinates.error) {
          var url = getUrl(coordinates, 'userPlaces');
          return url;
        } else {
          // TODO do something else, go to a different state
        }
    })
    .then(function (url) {
      return $http.get(url).then(extractPlaces);
    });
  };

  // TODO custom search

// RETURN OBJECT
  return {
    getPlaceList: function () {
      return data;
    },
    getPlaceByCity: function (city) {
      return data[0].City === city;
    },
    getPlaceTest: function () {
      return defaultSearch();
    }
  };

}

angular
  .module('components.place')
  .service('PlaceService', PlaceService);
