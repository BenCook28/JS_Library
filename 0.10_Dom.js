// alert("Happy Friday");

function Hotel(name, rooms, booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function(){
		return this.rooms - this.booked;
	}
}
var rri = new Hotel("Red Room Inn", 250, 230);
var alex = new Hotel("The Alexander", 500, 150);

var hotels = [rri, alex];

function showAllHotelsInfo(){
	for(var hotel in hotels){
		var hotelName = hotels[hotel].name;
		var hotelHtmlText = document.createTextNode(hotelName);
		//talk more about crateElement
		var listItem = document.createElement("li");
		listItem.appendChild(hotelHtmlText);
		document.getElementById("hotels").appendChild(listItem);
	}
}
showAllHotelsInfo();