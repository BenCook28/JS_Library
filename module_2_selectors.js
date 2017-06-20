$(function(){
	//By id - this adds a CSS class
	$('#example-one').addClass('highlight');

	//By class - we'll make two things change here.
	$('.example-two').css('border', '4px solid gray');

//By element
$('h5').click(function(){
	$('h5').fadeOut('slow', 'linear')
});

// https://jqueryui.com/draggable/
// $('draggable').draggable();

$('#id-combo-demo, .class-combo-demo, #draggable').draggable();
});

$('li:contains("sad")').click(function(){
	$(this).hide()
});