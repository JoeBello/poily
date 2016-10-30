$(function(){
  // acquire the template for searchView
  var template = require('../../templates/placesResults-place.hbs');

  // receive API response data from searchController
  var render = function(controllerData){
    // if a page token was saved to local storage, display a link to get
    // more results from the last search
    if (localStorage.pagetoken !== 'null'){
      $('.placesResults-More').css('display', 'block');
    }

    // insert all results before the "'"more results" link
    $('#placesResultsMore').before(template({
      places: controllerData
    }));
  }

  module.exports = {
    render: render
  }
}())
