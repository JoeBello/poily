'use strict';

angular.module('project1.common')
  .service('PlacesModel', function ($http, $httpParamSerializer, ENDPOINT) {
    var service = this;

    function getUrl(searchParams) {
      return ENDPOINT + '/userPlaces?' + $httpParamSerializer(searchParams);
    }

    function extract(result) {
      // console.log(result.data);
      return result.data;
    }

    service.check = function (str) {
      alert(str);
    };

    service.search = function (searchParams) {
      var url = getUrl(searchParams);
      console.log(url);
      return $http.get(url).then(extract);
      };

  })
