// Variable and function declarations are hoisted to the 
// top of their available scope. Function expressions are not hoisted.

// Function declaration takes precedence over variable 
// declarations (but not over variable assignment).

// Regarding variables, only variable declarations are hoisted to the top, not variable
// initialization or assignments (when the variable is assigned a value).

// The scope specifies from where you can access a variable 
// and whether you have access to the variable in that context

// JavaScript does not have block-level scope (variables scoped 
// to surrounding curly brackets); instead, JavaScript has function-level scope. 

var name = "Richard";
​// the blocks in this if statement do not create a local context for the name variable​
​if (name) {
	name = "Jack"; // this name is the global name variable and it is being changed to "Jack" here​
	console.log (name); // Jack: still the global variable​
}
​
​// Here, the name variable is the same global name variable, but it was changed in the if statement​
console.log (name); // Jack

// If you don't declare your local variables with the var keyword, they are part of the global scope.

// Local variables have priority over global variables in functions.

// All variables in setTimeout are executed in the global scope.

 // This example demonstrates priority of function and variable hoisting.
​var myName;
​function myName () {
console.log ("Rich");
}
​
​// The function declaration overrides the variable name​
console.log(typeof myName); // function