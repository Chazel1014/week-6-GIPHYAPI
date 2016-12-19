


var topics = ["beach", "dolphins", "seagulls", "sunsets", "surfing"]; 


$("button").on("click", function() {

var gif = $(this).attr("data-name"); 
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=dc6zaTOxFJmzC&limit=10";

$.ajax({ 
	url: queryURL, 
	method: 'GET'
}).done(function(response) {
        console.log(response);
        console.log(queryURL);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {

        	var gifDiv = $("<div>"); 
        	var p = $("<p>").text("Rating: " + results[i].rating);
        	var img = $("<img>");
        	img.attr("src", results[i].images.fixed_height.url); 
        	gifDiv.append(p);
        	gifDiv.append(img);

        }

        
      });

});

// function printUserTopic() {
//         // empty div first 
//         $("#buttons-view").empty();
//         // loops through topics
//         for (var i = 0; i < topics.length; i++) {
//           // creates a new button per topic
//           var newButton = $("<button>").addClass("gif").attr("data-name", topics[i]).text(topics[i]);
//           // add to page
//           $("#buttons-view").append(newButton);
//         }
// }





