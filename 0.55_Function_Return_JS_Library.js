// When a function is invoked, it begins execution with the first statement after the {
// and ends when it hits the } that closes the function body. This logic allows the function 
// to return control to the part of the program that invoked the function.

// The return statement can be used to cause the function to return early. When return is
// executed, the function returns immediately without executing the remaining statements.

// For example: 
var grade = 100;

if (grade >= 70){
	return "you passed"
} else {
	return "you failed"
}

//returns "you passed"

// A function always returns a value. If the return value is not specified, then the function 
// returns undefined.

// If the function was invoked with the new prefix and the return value is not an object,
// then this (the new object) is returned instead.