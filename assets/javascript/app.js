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
    var simpson = $(this).text().trim();
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
          personImage.attr("src", response.data[i].images.fixed_width_still.url);
          personImage.attr("data-still", response.data[i].images.fixed_width_still.url);
          personImage.attr("data-animate", response.data[i].images.fixed_width.url);
          personImage.addClass("gif")
          personImage.attr("data-state", "still");

          $(".gif").on("click", function () {
            var state = $(this).attr("data-state");
            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
         });

          }
      }
      });
  });

  $("#add-simpson").on("click", function (event) {
    
    var simpson = $("#simpson-input").val().trim();
    simpsons.push(simpson);
    console.log(simpsons);
    renderButtons();
  });



}); // document ready


// Jquery for creating buttons from text that display gif's //







































