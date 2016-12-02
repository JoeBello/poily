'use strict';

angular.module('project1.common')
  .service('PlacesModel', function ($window, $q, $http, $httpParamSerializer, ENDPOINT) {
    var service = this,
        geocoder = $window.navigator.geolocation;

    function getUrl(searchParams) {
      return ENDPOINT + '/userPlaces?' + $httpParamSerializer(searchParams);
    };

    function extract(result) {
      return result.data;
    };
// TODO create geolocation service
    function geocodeUser () {

      if ("geolocation" in navigator) {

        var coordinates = {},
            deferred = $q.defer();

        geocoder.getCurrentPosition(
          function (position) {
          coordinates.latitude = position.coords.latitude;
          coordinates.longitude = position.coords.longitude;
          deferred.resolve(coordinates);
        },
          function() {
            // do something if user denies permission
          }
      )
        return deferred.promise
      } else {
        coordinates.error = 'geolocation failed.'
        deferred.resolve(coordinates);
      }
    };

    service.defaultSearch = function() {
      return geocodeUser()
      .then(function (coordinates) {
          if (!coordinates.error) {
            var url = getUrl(coordinates);
            return url;
          } else {
            // do something else, go to a different state
          }
      })
      .then(function (url) {
        return $http.get(url).then(extract);
      });
    };

    service.customSearch = function (searchParams) {
      var url = getUrl(searchParams);
      console.log(url);
      return $http.get(url).then(extract);
      };

  });
