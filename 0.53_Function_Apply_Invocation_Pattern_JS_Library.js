// Functions in JavaScript can have methods because JS is an object-oriented language.  
// The apply method lets us construct an array of arguments to invoke a function when 
// we use them. It also lets us choose the value of this. The apply method takes two parameters:
// The value that should be bound to this and an array of parameters.

var array = [1, 1];
var sum = add.apply(null, array); // sum is 2
// Make an object with a status member.
var statusObject = {
 status: 'OK'
};
// statusObject does not inherit from Quo.prototype, but we can invoke the get_status method on
// statusObject even though statusObject does not have a get_status method.

var status = Quo.prototype.get_status.apply(statusObject);  //returns OK