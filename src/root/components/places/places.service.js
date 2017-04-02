function PlacesService($q, $http, $httpParamSerializer, API,
                        PlacesServiceGeocoder, AppStorageService,
                      $localStorage) {
  var geocoder = null;

  if (PlacesServiceGeocoder.supported === true) {
    geocoder = PlacesServiceGeocoder.geocoder;
  }

  function buildUrl(searchParams) {
    return API['places'].concat($httpParamSerializer(searchParams));
  }

  function extractResults(responseObject) {
    AppStorageService.savePageToken(responseObject.data.next_page_token || null);
    return responseObject.data.results;
  }

  function geolocatePlaces() {
    if (!geocoder) {
      return $q.reject({ error: 'geolocation service unavailable' });
    }

    return geocoder()
      .then(function(geocoderResponse) {
        return searchPlaces({
                location:[geocoderResponse.position.coords.latitude,
                          geocoderResponse.position.coords.longitude],
                pageToken: null
                });
      })
      .catch(function(error) {
        return { error: error };
      });
  }

  function searchPlaces(searchParams) {

    if (!searchParams.location) {
      return geolocatePlaces()
        .catch(function(error) {
          return { error: error };
        });
    }

    AppStorageService.saveLastSearch(searchParams);

    return $http.get(buildUrl(searchParams))
      .then(function(placesResponse) {
        return extractResults(placesResponse);
      })
      .catch(function(error) {
        return { error: error };
      });
  }

  return {
    geolocatePlaces: geolocatePlaces,
    searchPlaces: searchPlaces
  };

}

module.exports = PlacesService;
