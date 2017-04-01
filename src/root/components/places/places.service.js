function PlacesService($http, $httpParamSerializer, API,
                        PlacesServiceGeocoder, AppStorageService) {
  var geocoder;
  // TODO handle case where geocoder is unsupported
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

  // TODO handle case where geocoder is unsupported
  function geolocatePlaces() {
    if (geocoder === undefined) {
      return { error: 'geolocation service unavailable' };
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
        AppStorageService.destroyLastSearch();
        return { error: error };
      });
  }

  function searchPlaces(searchParams) {
    if (!searchParams.location) {
      return geolocatePlaces();
    }

    AppStorageService.saveLastSearch(searchParams);

    return $http.get(buildUrl(searchParams))
      .then(function(placesResponse) {
        return extractResults(placesResponse);
      })
      .catch(function(error) {
        AppStorageService.destroyLastSearch();
        return { error: error };
      });
  }

  return {
    geolocatePlaces: geolocatePlaces,
    searchPlaces: searchPlaces
  };

}

module.exports = PlacesService;
