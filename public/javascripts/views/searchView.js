$(function(){
  // receive API response data from searchController
  var render = function(controllerData){
    // acquire template for searchView
    var view = require('../../templates/placesResults.hbs');

    // if a page token was saved to local storage, display a link to get
    // more results from the last search
    if (localStorage.pagetoken !== 'null'){
      $('.placesResults-More').css('display', 'block');
    }

    // insert all results before the "'"more results" link
    $('#placesResultsMore').before(view({
      places: controllerData
    }));
  }

  module.exports = {
    render: render
  }
}())
