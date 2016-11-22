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

    function geocodeUser () {
      var coordinates = {},
          deferred = $q.defer();

      geocoder.getCurrentPosition(function (position) {
        coordinates.latitude = position.coords.latitude;
        coordinates.longitude = position.coords.longitude;
        deferred.resolve(coordinates);
      })

      return deferred.promise
    };

    service.defaultSearch = function() {
      return geocodeUser()
      .then(function (coordinates) {
          var url = getUrl(coordinates);
          return url;
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
