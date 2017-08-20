// The arguments array is a bonus parameter available to functions when they're invoked. 
// It gives the function access to all of the arguments supplied with the invocation, 
// including excess arguments that were not assigned to parameters. This makes it possible 
// to write functions that take an unspecified number of parameters as shown below:

// Note that defining the variable sum inside of the function does not interfere with the sum
// defined outside of the function. The function only sees the inner one.

var sum = function ( ) {
 var i, sum = 0;
 for (i = 0; i < arguments.length; i++) {
 sum += arguments[i];
 }
 return sum;
};
document.writeln(sum(4, 8, 15, 16, 23, 42)); // 108

// Because of a design error, arguments is not really an array. It is an array-like object.
// arguments has a length property, but it lacks all of the array methods