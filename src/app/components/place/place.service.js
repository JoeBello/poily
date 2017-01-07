function PlaceService ($http, $httpParamSerializer, $state, PlaceGeocoderService, placesAPI) {

  if (PlaceGeocoderService.supported === true) {
    var geocoder = PlaceGeocoderService.geocoder;
  }

  function getUrl(searchParams, type) {
    var endpoint = placesAPI;
    console.log(endpoint + $httpParamSerializer(searchParams));
    return  endpoint + $httpParamSerializer(searchParams);

  };

  function extractPlaces(response) {
    return response.data.results;
  };


  function defaultSearch () {
    return geocoder()
    .then(function(geocoderResponse) {
      // handle error
      if (geocoderResponse.error) {
        // go to search form state
        var url = 'poo';
        // $state.go('app');
        // return null;
      } else {
        var coordinates = geocoderResponse.position.coords;
        var coordinateParams = {
          latitude: coordinates.latitude,
          longitude: coordinates.longitude
        };
        // handle response
        var url = getUrl(coordinateParams, 'places');
      }
      console.log(url);
      return url;
    })
    .then(function (url) {
      if (url === 'poo') {
        // $state.go('app');
        // return url;
      } else {
        // return $http.get(url).then(extractPlaces);
      }
    });
  };

  // TODO custom search and return object operations

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
