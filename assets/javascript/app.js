
// creating an inital array of topics
var topics = ["beach", "dolphins", "seagulls", "sunsets", "surfing"]; 

// function 1 displays gifs 

//when anything with a class of gif is pressed, do this:

$(".gifBtn").on("click", function searchGifs() {

 	//capture data-name for whatever is clicked 
	var gif = $(this).attr("data-name"); 
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC";
	
	$.ajax({ 
		url: queryURL, 
		method: 'GET'
	}).done(function(response) {

		console.log(response);
		// console.log(queryURL);

		//shortcut to gif's json data
		var results = response.data;

			//for loop to run through the data
			for (var i = 0; i < results.length; i++){
				//designated div for gifs
				var gifsHere = $("<div id = 'gifsHere'>");
				//shortcut for gif's rating
				var rating = results[i].rating; 
				// console.log(results[i].rating);
				//designated line to list rating 
				var gifInfo = $("<p>").text("Rating: " + rating);
				//saves path to image
				var animated = results[i].images.fixed_height.url;
				// links to image url to display gif
				var gifImage = $("<img>").attr("src", animated).attr("data-animate", animated);
		// var still = results[i].images.original_still;
		// var animated = results[i].images.original.url;
			
			//put rating info in designated gif div 
			gifsHere.prepend(gifInfo);
			gifsHere.prepend(gifImage);

			//puts new gif div in html gif div 
			$("#gifs-view").prepend(gifsHere);
		}; 

	});
});

// function 2 creates button based on user input, adds to array 
// clicking submit button starts function
$("#add-gif").on('click', function userGen(){
	event.preventDefault();

	//saves users input as variable 
	var userInput = $("#topic-input").val().trim();
	console.log(userInput);
	topics.push(userInput); 

	//creates new button with info from users input
	var newButton = $("<button>");
	newButton.addClass('gifBtn').attr('data-name', userInput).text(userInput); 

	//appends new button to div 
	$("#buttons-view").append(newButton);

$(document).on('click', "gifBtn", function(){
		response();
	});

});







