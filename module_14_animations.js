$(document).ready(function(){
	// animate
	$("#animate").click(function(){
		$(this).animate({
			"height": "200px",
			"width": "300px"
		});
	});
});

// with time paramenter
$("#animate-time").click(function(){
	$(this).animate({
		"height": "200px",
		"width": "300px"
	}, 4000);
});

function changeColor(){
		$(this).animate({"background-color": "red"});
}

// with callback
$("#animate-callback").click(function(){
	$(this).animate({
		"height": "200px",
		"width": "300px"
	}, 2500, changeColor);
});
