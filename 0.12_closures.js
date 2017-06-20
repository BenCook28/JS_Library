/*
closures essentially functions
	variables inside of functions cannot be used outside
*/

var init = function(){
	var name = "Summer";
	function displayName(){
		console.log(name)
	
	displayName();
}
init();
console.log(name);

var friend = {}
// here is our closure
var setAge = function(myAge){
	var birthday = '5/16/2017'
	return {
		getAge: function(){
			console.log(myAge);
			return myAge;
		}
	}
}
/*
var friend = {
	age = function(){
		setting the age
		return the age
	}
}
*/
friend.age = setAge(55);
console.log(age);
console.log(friend.age.getAGet());
console.log(friend.birthday);