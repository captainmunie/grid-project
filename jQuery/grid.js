$(document).ready(function(){
	//Loads a grid upon loading the page
	gridCreation();
 });

function getGridSize(){
	// Obtain user specified grid size
	do {
		var input = prompt("Please enter a grid size between 1 and 64:","5");
		
		if (input > 0 && input <= 64) {
			return input;
		}
	} while (true);	
};

function gridCreation (){
	$('.container').html("");
	var input = getGridSize();
	//Loop to create divs for specified grid size
	for (var i = 1; i <= input; i++) {
		for (var j = 1; j <= input; j++) {
			//Creating divs for each grid
			$('.container').append('<div class="grid"></div>');
		};
		//Creating a div for new row
		$('.container').append('<div class="gridspacing"></div>');
	};

	//Defining the grid size with border-width taken into account
	var grid_size = $('.container').width() / input - 2;

	//Set the grid size and height
	$('.grid').css('width', grid_size);
	$('.grid').css('height', grid_size);

	//Highlights upon mouse over
	$('.grid').hover(function(){
		$(this).addClass("highlighted");
	});
};