//Conditionals
/*
	> Greater than 
	< Less than
	>= Greater or Equal
	<= Lesse or Equal
	== Equal to 
	=== Strictly Equal to
	! Not
	!= Not Equal to
*/

console.log(1 > 3);
console.log( 10 != 10);
var name = "Kenn";
console.log(name == "kenn");
console.log(6 == "6"); 
console.log( 6 === "6");

// if statements
/* if (boolean expression){
	//some code goes here;
}
*/
if ( 242 % 2 == 0){
	console.log("this number is even");
}
var userName = "admin"
var passWord = "admin";
var passWord = "admin";
if (userName == "admin" && passWord == "admin"){
	console.log("You have been granted access.");
} else if( userName != "admin" && passWord != "admin") {
	console.log("Incorrect username and password");
} else if( userName != "admin"){
	console.log("Incorrect username.")
} else {
	console.log("Incorrect password.")
}

/*
Chaining boolean expressions
	&& and
	||
*/

var age = 20;
if (age >= 35){
	console.log("You can vote and also hold any place in government.");
} else if (age >= 25){
	console.log("You can vote and run for senate.");
} else if (age >= 18) {
	console.log("You can vote.");
} else("You're outta luck.");

var age = 300;
if (age >= 67){
	console.log("You can get full social security befefits until the program runs out of money.")
} else if (age >= 62) {
	console.log("You can start collecting social security befefits until the program runs out of money.")
} else if (age >= 21) {
	console.log("You can legally drink alcohol")
} else if (age >= 18){
	console.log("You can vote.")
} else if (age >= 16) {
	console.log("You can legally drive.")
}

var wins = 4;
if (wins == 4) {
	console.log("Scoreboard, loosers.");
} else if (wins == 3){
	console.log("You got lucky once.");
} else if (wins == 2){
	console.log("Finally a challenge.");
} else if (wins == 1){
	console.log("Here comes a comeback.")
} else if (wins == 0){
	console.log("Please tell Belichick to stop cheating.")
} else {
	console.log("We look forward to beating you next season.")
}

for(var i = 1; i <= 100; i++){
	if(i % 3 == 0 && i % 5 == 0) {
		console.log("FizzBuzz");
	} else if (i % 5 == 0) {
		console.log("Buzz");
	} else if (i % 3 == 0) {
		console.log("Fizz");
	} else {
		console.log(i);
	}
