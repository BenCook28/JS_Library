$(document).ready(function(){
// * is a global selecetor
	$("*").click(function(e){
		console.log(e.target);
		console.log("The X Coordinates are " + e.pageX);
		// restricts event info to only the item that was clicked and not parent elements
		e.stopPropagation();
	})
});