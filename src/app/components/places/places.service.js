function PlacesService ($http, $httpParamSerializer, $localStorage, API,
  PlacesServiceGeocoder) {

  var storage = $localStorage.project1.places;

  if (PlacesServiceGeocoder.supported === true) {
    geocoder = PlacesServiceGeocoder.geocoder;
  }

  function getUrl(searchParams, type) {
    var endpoint = API[type],
        params = $httpParamSerializer(searchParams);
    return  endpoint.concat(params);
  }

  function savePosition(coordinates) {
    return storage.lastCoordinates = coordinates;
  }

  function extractResults(responseObject) {
    console.log(responseObject);
    // TODO try-catch
    var results = responseObject.data.results,
        coordinates = angular.copy(results[0].geometry.location);

    savePosition(coordinates);
    return responseObject.data.results;
  }

  function geolocatePlaces() {
    if (geocoder === undefined) {
      var errorObject = { error: 'geolocation service unavailable' };
      return errorObject;
    }

    return geocoder()
      .then(function(geocoderResponse) {
        var geoObject = {
              lat: geocoderResponse.position.coords.latitude,
              lng: geocoderResponse.position.coords.longitude
            };
        return searchPlaces(geoObject);
      })
      .catch(function(error) {
        return error;
      });
  }

  function searchPlaces(searchParams) {
    var url = getUrl({
      latitude: searchParams.lat || '',
      longitude: searchParams.lng || '',
      zipcode: searchParams.zipcode || '',
      radius: searchParams.radius || '',
      type: searchParams.type || ''
    }, 'places');

    return $http.get(url)
      .then(function (placesResponse) {
        return extractResults(placesResponse);
      })
      .catch(function(error) {
        return error;
      });
  }

  return {
    geolocatePlaces: geolocatePlaces,
    searchPlaces: searchPlaces
  };

}

angular
  .module('components.places')
  .factory('PlacesService', PlacesService);
