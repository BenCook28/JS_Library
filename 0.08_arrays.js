// arrays
//[]
var students = ["Harrison", "Rose", "Ben", "Caitlyn", "Kay"];

// console.log(students.length);
// // 
// //console.log(students[-1]);
// students[5] = "Nick";
// students.push("Aaron");
// console.log(students);
// students.pop();
// console.log(students);

//for each loop

// index
// for (var s in students){
// 	var upperCase = students[s].toUpperCase();
// 	console.log(students[s]);
// }
// console.log(students[0] + "is in the position of " + s);
// console.log(students[1]);
// console.log(students[2]);

// var firstTen = [];
// for (var i = 1; i < 11; i++){
// 	firstTen.push(i);
// } 
// for (var x in firstTen){
// 	console.log(firstTen[x]);
// }

//bronze
// var hobbies = ["value investing", "reading and audiobooks listening", "bringing ideas for ways to make money to life", "learning and using foreign languages", "JavaScript", "exercising, especially running"]
// //silver
// var cars = ["I prefer public transport", "Otherwise a cheap electric car", "self-driving car", "car which minimizes the cost over the life of the car"];
// for (var i = 0; i < cars.length; i++){
// 	console.log(cars[i]);
// }
// //gold
// var doubleList = [hobbies, cars, students];
// for (var i = 0; i < doubleList.length; i++){
// 	for (var j = 0; j < doubleList[i].length; j++){
// 	console.log(doubleList[i][j]);
// }
// }
// function getRandomIntInclusive(min, max){
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomIntInclusive(0, 50));

// console.log(Math.floor(Math.random() * 50));

var fifteenRandoms = [];
for(var i = 0; i < 15; i++){
	fifteenRandoms.push(Math.floor(Math.random() * 50));
}
console.log(fifteenRandoms);
function isPrime(value){
	
	for(var i = 2; i < value; i++){
		if(value % i === 0){
			return false;
		}
		else{
			return true;
		}
	}
}
var primes = [];
for(var y = 0; y < fifteenRandoms.length; y++){
	if (isPrime(y) === true) {
		primes.push(y);
	}
}
console.log(primes);

var numList = [];
for ( i = 5 ; i <= 45 ; i ++ ){
	numList.push(i);
} for (var i numList