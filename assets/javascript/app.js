var topics = ["beach", "dolphins", "seagulls", "sunsets", "surfing"]; 


$("button").on("click", function() {

var gif = $(this).attr("data-name"); 
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC&limit=10";

$.ajax({ 
	url: queryURL, 
	method: 'GET'
}).done(function(response) {

	console.log(response);
	console.log(queryURL);

	var

	var imageUrl = response.data.url; 

	var showGif = $("<img>").attr("src", imageUrl); 
	
	var gifDiv = $("<div>").attr("class", "gif-div"); 
	
	var p = $("<p>").text("Rating: " + response.data.rating);
	
		showGif.append("#gifs-view");
	
		p.append("#gifs-view");
        
      });


$("#buttons-view").on('click', function() {
	event.preventDefault();

	var newButton = $("#topic-input").val();

	topics.push(newButton);

});


});







