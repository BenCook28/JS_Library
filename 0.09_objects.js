//objects

// var emptyObject = {};

// var johnQualls = {
// 	name 	 : "John Qualls",
// 	age 	 : 39,
// 	hairColor: "Brown Hair"
// }

// console.log(johnQualls);
// console.log(johnQualls.name);
// console.log(johnQualls.name + " is " + johnQualls.age + " years old.");
// johnQualls.height = "6ft";
// console.log(johnQualls.height);

// var animal = {
// 	Type: "horse",
// 	Weight: "2,000 lb",
// 	CommonInIndiana: false,
// 	Habitat: "plains and grasslands"
// }
// // console.log(wildHorse);

// console.log(animal["Habitat"]);
// animal["nickName"]= "Spirit";

// console.log(animal["nickName"]) + " lives in " + animal["Habitat"];

// console.log(animal.name);
// animal.Type = "wildHorse";

//  // change the weight of the animal using [] notation

//  animal["weight"] = "2,200 lb";
//  animal["Movies about Me"] = ["Spirit", "Warhorse", "Dances with Wolves"];

//  console.log(Object.keys(animal));

//  console.log(animal);

 //Objects with methods

 // var Bryce = {
 // 	name 		: "Bryce Greene",
 // 	age			: 55,
 // 	vocationi	: "TA",
 // 	email		: "thebryceisright@gmail.com",
 // 	greeting    : function(){
 // 					return "Greetings Earthlings, I am " + this.name + " I am here to learn you.";
 // 				},
 // 	contactMe   : function(){
 // 					return "You can contacet me at " + this.email + "."
 // 				},
 // 	message		: function (){
 // 					return this.greeting() + " " + this.contactMe(); 	
 // 				}	
 // }	
 // console.log(Bryce.greeting())
 // console.log(Bryce.contactMe());
 // console.log(Bryce.message());

 // var paul = new Object;
 // console.log(paul);
 // var james = {};
 // paul.name = "Paul O'Connor";
 // paul.vocation = "Curriculum Master";
 // paul.hobbies = ["rocking out code", "listening to good music", "and baking banana muffins"];

 //object constructor template

//  function Hotel(name, rooms, booked){
//  	this.name = name;
//  	this.rooms = rooms;
//  	this.booked = booked;
//  	this.checkAvailability = function (){
//  		return "There are " + (this.rooms - this.booked) + " rooms left."
//  	}
//  }
// // the new keyword helps us intantiate a new Object
//  var jw = new Hotel("JW Marriot", 300, 250);
//  console.log(jw);
//  var jwExp = new Hotel("Mini J'Dubs", 100, 50);
//  console.log(jwExp.checkAvailability());
// var Hotels = [jw, jwExp];
//  for (var h in Hotels){
//  	console.log(Hotels[h].name);
//  }
//gold, silver, bronze
// var person = {
// name 		: "John Galt",
// age 			: "24",
// occupation 	: "inventor",
// getName 		: function(){
// 						return this.name;
// 						},
// getAge		: function(){
// 						return this.age;
// 						},
// getOccupation: function(){
// 						return this.occupation;
// 						}
// };
// var persons = []

// var Child = {
// 	childName		: person,
// 	invention		: "motor"

// };
// console.log(Child);

//text challenge

var same = [];
var allPersons = [];

function Persons(name, age, favoriteShows){
	this.name = name;
	this.age = age;
	this.favoriteShows = ["favoriteShows"];
	this.birthday = function(){
		return this.age + 1;
	}

	this.inCommon = function(person2){
		// same.push(this.favoriteShows);
		for (var i = 0; i < this.favoriteShows - this.favoriteShows.length ; i++){
			for (var j = 0; j < same[i]; j++){
				if (this.favoriteShows[i] == same[j]){
					console.log("I have " + this.favoriteShows[i] + " in common with someone.")
				} else {
					console.log("No shows in common");
				}
			}
		}
	}
	this.message = function(){
		return "Hello, my name is " + this.name + " and I am " + this.age + " years old, and one of my favorite shows is: " 
		+ favoriteShows[Math.floor(Math.random() * favoriteShows.length)]
	}
}
	var Larry = new Persons("Larry", 30, ["South Park", "How I Met Your Mother", "Nova"]);
	var Moe = new Persons("Moe", 28, ["South Park", "Mad Money"]);
	var Curley = new Persons("Curley", 26, ["Barney and Friends", "Nova"]);
	var John = new Persons("John", 25, ["Seinfield"]);
	var Tom = new Persons("Joe", 99, ["What is television?"]);

console.log(Moe.birthday());
// console.log(Larry.inCommon());
console.log(Larry.inCommon());