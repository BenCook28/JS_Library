// // Functions

// /*
// 	function Name_of_Function(){
	
// 	}
// */
// //Declaring the function
// function greeting(){
// 	var name = "Patrick";
// 	console.log(name + " says Helloooo Vietnam!");
// }
// //calling the function
// greeting();

// function weatherReport(){
// 	var weather = "sunny";
// 	console.log("Today it is " + weather + ".");
// }

// weatherReport();

// // functions with parameters
// function shoes(brand){
// 	console.log("Man those " + brand + " are on fleek!");
// }
// shoes("Crocks");
// //functions with multiple parameters
// function add(num1, num2){
// 	console.log(num1 + num2);
// }

// add(34, 66);

// // functions that return data

// function sum(num1, num2){
// 	return num1 + num2;
// }
// var sumA = sum(1, 1);
// console.log(sumA);

// var answerToQuestion = sum(23, 17);

// function multiply(num1, num2){
// 	return(num1 * num2);
// }

// var productA = multiply(2, 1);
// console.log(productA);

// function divide(num1, num2){
// 	return(num1 / num2);
// }
// var quotientA = divide(9, 3);
// console.log(quotientA);

// function modulus(num1, num2){
// 	return(num1 % num2);
// }
// var modulusA = modulus(10, 6);
// console.log(modulusA);

// function subtract(num1, num2){
// 	return(num1 - num2);
// }
// var differenceA = subtract(6, 1);
// console.log(differenceA);

// function duel(personOne, personTwo){
// 	console.log(personOne + " shall duel " + personTwo + " at high noon.");
// }
// duel("Hamilton", "Burr");

// function bills(){
// 	var total = 0;
// 	for(var i = 0; i < arguments.length; i++){
// 		total += arguments[i];
// 		console.log("You owe " + total + " this month.")
// 	}
// }
// bills(1, 2, 3);

// function cashRegister(item, itemCost, numItems){
// 	grossCost = itemCost * numItems;
// 	tax = grossCost * 0.07;
// 	totalCost = grossCost + tax;
// 	if(numItems == 1){
// 		console.log(numItems + " " + item + " will cost you " + totalCost);
// 	} else {
// 	console.log(numItems + " " + item + "s will cost you " + totalCost)
// 		}
// }
// cashRegister("alvacado", 0.50, 100);

function calculator(num1, operator, num2){
	// if(operator != "+" || operator != "-" || operator != "*" || operator != "/" || operator != "%" || (num1.isNaN == true) && num2.isNaN = true){
	// 	console.log("Invalid format");
	// } else {
	// result = num1 operator num2;
	if (operator == "+") {
		console.log(num1 + num2);
	} else if (operator == "-") {
		console.log(num1 - num2);
	} else if (operator == "*") {
		console.log(num1 * num2);
	} else if (operator == "/"){
		console.log(num1 / num2);
	} else if (operator == "%"){
		console.log(num1 % num2);
	} else {
		console.log("Invalid formal");
	}
}
calculator(2, "%", 2);
