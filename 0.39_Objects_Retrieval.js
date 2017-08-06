// Wrapping a string expression in [] retrieves values.
//In a key:value pair like "name": "Ben", Ben is the value.
//The . notation also works if the string expression is 
//a constant, legal JS name and not a reserved word.
//The . notation is preferred because it reads better and uses
//fewer keystrokes.  
var flight = {
 airline: "Oceanic",
 number: 815,
 departure: {
 IATA: "SYD",
 time: "2004-09-22 14:55",
 city: "Sydney"
 }
};

var stooge = {
 "first-name": "Curley",
 "last-name": "theStooge"
};

//Using the [] notations,
stooge["first-name"] //returns "Curley"
//and we can nest dots to retrieve nested values
flight.departure.city //returns "Sydney"

//If a value doesn't exist, we get undefined

//We can use || to input default values
// var status = flight.status || "unknown";

//When we try to retrieve values from undefined, we get
//a TypeError.  If we use && for example, flight.entertaiment &flight.plane.model
//we get undefined instead of a type error.