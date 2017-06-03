function PresetService($localStorage, AppService) {

  return {
    getLastLocation: function getLastLocation() {
      var location = $localStorage.Poily.lastSearch.location || null,
          errorObject = {
            error: '',
            source: 'PresetService.getLastLocation'
          };

      try {
        if (typeof location === 'string' || location === null) {
          return location;
        } else if (typeof location === 'object') {
          return location = location.join(',');
        } else {
          errorObject.error = 'invalid location';
          throw errorObject;
        }
      }
      catch(error) {
        console.log(error);
        return null;
      }
    },

    init: function init() {
      AppService.init();
      if (!$localStorage.Poily.hasOwnProperty('lastSearch')) {
        $localStorage.Poily.lastSearch = {};
      }
    }
  }

}

module.exports = PresetService;
