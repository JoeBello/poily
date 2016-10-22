$(function() {
  var location, radius, type,
      placesResultsTemplate = require('../views/placesResults.hbs');

  $('#placesSearch-submit').click(function(){
    location = $('#placesSearch-location').val();
    radius = $('#placesSearch-radius').val();
    type = $('#placesSearch-venue').val();

    console.log('Places search submitted.');

    $.get('http://localhost:3000/api/places',
          { location: location, radius: radius, venue: type })

      .done(function(response){
        console.log('Places search success!');

        var placesResults = response.results;
        $('main').append(placesResultsTemplate({
            places: placesResults,
            name: name
          })
        );
      })

      .fail(function(jqXHR, textStatus){
        console.log('Places search failed!');
        console.log(textStatus);
      });

    });
})

  // $('#more').on('click', function(){
  //   // window.alert('HERRO');
  //   // turn ajax call into a function where 'data' is passed in.
  //   // when more results is clicked, the
  //   // data attribute is empty
  //   $.ajax({
  //     url: 'http://localhost:4000/hello',
  //     method: 'GET',
  //     // data: form.serialize(),
  //     // dataType: 'json'
  //   })
  //   .done(function(response) {
  //     console.log('more listings done!');
  //     // console.log(response);
  //     // var source = $('#template').html();
  //     // var template = Handlebars.compile(source);
  //     // $('.content').html(template({places: response}));
  //   })
  //   .fail(function(jqXHR, textStatus) {
  //     console.log(textStatus);
  //   })
  //   .always(function() {
  //     console.log("complete");
  //   });
  // });
// })
