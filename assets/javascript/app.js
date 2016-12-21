
// creating an inital array of topics
var topics = ["beach", "dolphins", "seagulls", "sunsets", "surfing"]; 

// function 1

//when anything with a class of gif is pressed, do this:

$(".gifBtn").on("click", function() {

 	//capture data-name for whatever is clicked 
	var gif = $(this).attr("data-name"); 
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC";
	
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
				console.log(results[i].rating);
				//designated line to list rating 
				var gifInfo = $("<p>").text("Rating: " + rating);

				var gifImage = $("<img>").attr("src", animated).attr("data-animate", animated);
				
				var animated = results[i].images.fixed_height.url;
		
		// var still = results[i].images.original_still;
		// 	var animated = results[i].images.original.url;
			
			//put rating info in designated gif div 
			gifsHere.prepend(gifInfo);
			gifsHere.prepend(gifImage);

			//puts new gif div in html gif div 
			$("#gifs-view").prepend(gifsHere);
		}; 

	});
});

// function 2
$("#add-gif").on('click', function userGen(){
	event.preventDefault();

	var userInput = $("#topic-input").val().trim();
	console.log(userInput);
	topics.push(userInput); 

	var newButton = $("<button>");
	newButton.addClass('gifBtn').attr('data-name', userInput).text(userInput); 


	var addButtonsHere = $("<div class = addButtonsHere>");

	addButtonsHere.append(newButton);
	$("#buttons-view").append(addButtonsHere);

});


// 	console.log(newTopic);

// });






