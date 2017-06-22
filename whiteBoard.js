//challenge one
var fullName = function(first, last){
	return first + " " + last;
}
console.log(fullName("Paul", "O'Connor"));

//challenge two
var multiply = function(first, second){
	if((isNaN(first)) == true && (isNaN(second) == true)){
		alert("Please input only numbers.")
	} else{
	return first * second;
	}
}
console.log(multiply(2, 2));

//challenge three
var user = {
username : "scroob",
password : 12345 	
}
if ((user.username == "scroob") && (user.password == 12345)){
	console.log("User is logged in.")
} else {
	console.log("Invalid username and/or password.")
}
//challenge four
for(var i = 0; i <= 20; i+=2){
	console.log(i);
}