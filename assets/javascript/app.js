

$(document).ready(function () {

  var simpsons = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];
  console.log(simpsons);

  function renderButtons() {
    $("#simpsons_view").empty();

    for (var i = 0; i < simpsons.length; i++) {
      var a = $('<button>');
      a.addClass("simpson");
      a.attr("data-name", simpsons[i]);
      a.text(simpsons[i]);
      $("#simpsons_view").append(a);
    }
  }
  renderButtons();

  $("#simpsons_view").on("click", "button", function (event) {
    //  event.preventDefault();
    var simpson = $(this).text().trim();
    // simpsons.push(simpson);
    console.log(simpson);

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=aoSPXoHUbFoGrtwGZUsQSBL735BHRriI&q=" + simpson + "&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);

      var results = response.data;
      for (var i = 0; i < results.length; i++) {

        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          var gifDiv = $("<div class='item'>");
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);
          gifDiv.append(p);
          gifDiv.append(personImage);
          $("body").append(gifDiv);

        }
      }
    });
  });

  $("#add-simpson").on("click", function(event) {
    // event.preventDefault();
    var simpson = $("#simpson-input").val().trim();
    simpsons.push(simpson);
    console.log(simpsons);
    renderButtons();
  });

}); // document ready







// var simpsons = ["Homer","Marge","Bart","Lisa","Maggie"];


//   function renderButtons() {
//     $("#simpsons_view").empty();

//     for (var i = 0; i < simpsons.length; i++) {
//       var a = $('<button>');
//       a.addClass("simpson");
//       a.attr("data-name", simpsons[i]);
//       a.text(simpsons[i]);
//       $("#simpsons_view").append(a);

//     }

//   }

//   $("#add-simpson").on("click", function (event) {
//     event.preventDefault();
//     var simpson = $("#simpson-input").val().trim();
//     simpsons.push(simpson);

//     var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=aoSPXoHUbFoGrtwGZUsQSBL735BHRriI&tag=simpsons&limit=10";


//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })


//       .then(function (response) {

//         var imageUrl = response.data.image_original_url;
//         var simpImage = $("<img>");
//         simpImage.attr("src", imageUrl);
//         simpImage.attr("alt", "simpson image");
//         $("#simpsons_view").append(simpImage);




//       });



//     renderButtons();

//   });

//     renderButtons();































