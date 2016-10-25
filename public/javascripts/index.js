$(function() {
  var pageToken;

  var ajaxGet = function(params){
    $.get(params.url, params.searchCriteria)
      .done(function(response){
        console.log('GET success!');
        console.log(response);
        pageToken = response.next_page_token || null;
        params.callback(response, params.view);
      })
      .fail(function(jqXHR, textStatus){
        console.log('GET fail!');
        console.log(textStatus);
      });
  }

  var templateInjector = function(data, view){
    $('main').append(view({
      places: data.results,
    }));
  };

  $('#placesSearch-submit').click(function(){
    // TODO on initial search, clear main container, insert an empty container
    // and have templateInjector inject template into the new empty container
    // consider a more versatile structure for the results template
    $('.placesResults-Container').remove();
    // TODO all query params must be lower case and underscore delimited
    var params = {
      url: 'http://localhost:3000/api/places',
      searchCriteria: {
          location: $('#placesSearch-location').val(),
          radius: $('#placesSearch-radius').val(),
          type: $('#placesSearch-venue').val()
        },
      view: require('../views/placesResults.hbs'),
      callback: templateInjector
    };
    ajaxGet(params);
  });

  $('#more').click(function(){
    // TODO on requesting more results, append template to already injected
    // template
    // TODO all query params must be lower case and underscore delimited
    var params = {
      url: 'http://localhost:3000/api/places',
      searchCriteria: {
          location: $('#placesSearch-location').val(),
          radius: $('#placesSearch-radius').val(),
          type: $('#placesSearch-venue').val(),
          pageToken: pageToken
        },
      view: require('../views/placesResults.hbs'),
      callback: templateInjector
    };
    ajaxGet(params);
  });
})
