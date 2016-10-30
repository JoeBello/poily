$(function(){
  // acquire the template for searchView
  var resultTemplate = require('../../templates/placesResults-place.hbs');
  var moreLinkTemplate = require('../../templates/moreResults.hbs');

  // receive API response data from searchController
  var render = function(controllerData){

    // insert all results before the "more results" div
    $(resultTemplate({ places: controllerData })).insertBefore('#moreResults');

    // if a page token was saved to local storage, display a link to get
    // more results from the last search
    if (localStorage.pagetoken !== 'null'){
        $('#moreResults').append(moreLinkTemplate);
    }
  }

  module.exports = {
    render: render
  }

}())
