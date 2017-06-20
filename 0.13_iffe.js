/*
	iffe = immediatly-invoked function expression

*/
var x = "hey guys";
(function printNum(){
	var a = 5;
	console.log(a);
})();

function printName(){
	var name = "John";
	console.log(name)
}

printName()

Create an iffe that counts from 1 to 10

(function countToTen(){
	for(var i = 1; i <= 10 ; i++){
		console.log(i);
	}
})();

// countToTen()
