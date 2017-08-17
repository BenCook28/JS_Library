//A function is invoked as a function when it is 
//not the porperty of an object.

//For example, JavaScript invokes the function below 
//as a function:
var product = multiply(3, 4);

//A function invoked with the function pattern 
//is bound to the global object, but we can 
//work around this by defining a variable in the method
//and assigning it the value of this so the inner function
//has access to the variable.  By convention, we call the
//variable that.  Here's an example:

// Augment myObject with a double method.
myObject.double = function ( ) {
 var that = this; // Workaround.
 var helper = function ( ) {
 that.value = add(that.value, that.value);
 };
 helper( ); // Invoke helper as a function.
};
// Invoke double as a method.
myObject.double( );
document.writeln(myObject.getValue( ));