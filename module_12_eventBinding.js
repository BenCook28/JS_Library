$(document).ready(function(){
	// binding an event with on
	//click is one type of event
	$("#on li").on("click", function(){
		// this selects the li that was clicked
		$(this).hide();
	})
		$("#off li").on("click", function(){
		$(this).hide();
		$("#off li").off("click");
	})	
	// Event Helpers - this is the same code as above
	$("#off li").click(function(){
		$(this).hide();
		$("#off li").off("click");
	})	
});