//A function stored as an object property is a method.  
//If an invocation contains a refinement, which is a 
//dot . expression or [subscript] expression.

//Here's an example of a method:

var myObject = {
 value: 0,
 increment: function (inc) {
 this.value += typeof inc === 'number' ? inc : 1;
 }
};

//Methods use this to retrieve values from objects
//and modify objects.
//Pulbic methods use this to get their context.