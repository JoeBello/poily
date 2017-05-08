function PlaceFactory($q, $http, $httpParamSerializer, API, AppStorageService,
                        $rootScope) {

  AppStorageService.init();

  function buildUrl(searchParams) {
    return API['places'].concat($httpParamSerializer(searchParams));
  }

  function deleteAllPlaces() {
    return AppStorageService.deleteAllPlaces();
  }

  function deletePlace(place) {
    return AppStorageService.deletePlace(place);
  }

  function extractResults(responseObject) {
    AppStorageService.saveNextPageToken(responseObject.data.next_page_token);
    return responseObject.data.places;
  }

  function getLastSearch() {
    return AppStorageService.getLastSearch();
  }

  function getNextPageToken() {
    return AppStorageService.getNextPageToken();
  }

  function getSavedPlaces() {
    return AppStorageService.getSavedPlaces();
  }

  function saveLastSearch(searchDetails) {
    return AppStorageService.saveSearch(searchDetails);
  }

  function saveNextPageToken(token) {
    return AppStorageService.saveNextPageToken(token);
  }

  function savePlace(place) {
    return AppStorageService.savePlace(place);
  }

  function searchNewPlaces(searchParams) {

    if (!searchParams.radius) {
      searchParams.radius = 50;
    }

    saveLastSearch(searchParams);

    return $http.get(buildUrl(searchParams))
      .then(function(placesResponse) {
        return extractResults(placesResponse);
      })
      .catch(function(error) {
        return { error: error };
      });
  }


  return {
    deleteAllPlaces: deleteAllPlaces,
    deletePlace: deletePlace,
    getLastSearch: getLastSearch,
    getNextPageToken: getNextPageToken,
    getSavedPlaces: getSavedPlaces,
    savePlace: savePlace,
    searchNewPlaces: searchNewPlaces
  };

}

module.exports = PlaceFactory;
