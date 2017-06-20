$(document).ready(function(){
	//first and last
	$("#example-one li:first").css({border: "2px solid blue"});
	$("#example-one li:last").css({border: "2px solid red"});

	// odd and even
	$("#example-two li:odd").css("background-color", "#EEE");
	$("#example-two li:even").css("background-color", "#CCC");

//not
//target all li's inside #not-example except for #list-item-three
$("#not-example li:not('#list-item-three')").css({border: "2px solid yellow"});

// less than & greater than
$("#example-four li:lt(5)").css("background-color", "yellow");
$("#example-four li:gt(2)").css({border: "2px solid red"});
})
