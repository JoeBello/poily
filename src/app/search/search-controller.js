angular.module('project1')
  .controller('SearchCtrl', function($scope, $state) {
    explore.search = {
      location: '',
      radius: '',
      type: ''
    };

    explore.error = '';

    function submitSearch() {
      // PlacesModel.check('pewp');
      PlacesModel.search({
        location: explore.search.location,
        radius: explore.search.radius,
        type: explore.search.type
      })
      .then(function (result) {
        console.log(result);
        // onSuccess
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(explore.resetForm())
    }

    function onSuccess(result) {
      // create this state
      $state.go('places');
    }

    explore.submit = function (search, isValid) {
      if (isValid) {
        submitSearch();
      } else {
        explore.error = 'Invalid search criteria!';
      }
    }

    explore.resetForm = function () {
      explore.error = '';
      explore.search = {
        location: '',
        radius: '',
        type: ''
      };
    };

  })
