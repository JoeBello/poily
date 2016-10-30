$(function(){
  // acquire SearchController
  var searchController = require('./controllers/searchController');
  $('#placesSearch').submit(function(event) {

    // prevent default behavior
    event.preventDefault();

    // TODO input validation

    // cache value for place search type and replace white space with
    // underscore
    var placeType = $('#placesSearch-type').val(),
      placeTypeUnderscored = placeType.replace(/ /g, '_');

    // set value of place search type property to underscore delimited value
    $('#placesSearch-type').val(placeTypeUnderscored);

    // cache form properties
    var form = $(this),
      formProps = {
        url: form.attr('action'),
        queryParams: form.serialize().toLowerCase(),
        newSearch: true
      };

    console.log(formProps.queryParams);

    // call SearchController start() with form properties
    searchController.start(formProps);
  });

  // add event listener to body, to be binded to #getMoreResults link
  // if/when added
  $('body').on('click', '#getMoreResults', function(event) {
    // prevent default behavior
    event.preventDefault();

    // cache form properties
    var form = $('#placesSearch'),
    // TODO all query params must be lower case and underscore delimited
    // TODO input validation
     formProps = {
      url: form.attr('action'),
      queryParams: form.serialize() + "&pagetoken=" + localStorage.pagetoken,
      newSearch: false
    };

    // call SearchController start() with form properties
    searchController.start(formProps);
  })
}());
