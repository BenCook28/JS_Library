//Objects can inherit properties directly from other objects.
//in JavaScript.Functions that are intended to be used with the 
//new prefix are called constructors.  By convention, we
//keep constructors in values with a capitalized name.
//We get errors if we don't use new as in the example below:

var Quo = function (string) {
 this.status = string;
};
// Give all instances of Quo a public method
// called get_status.
Quo.prototype.get_status = function ( ) {
 return this.status;
};
// Make an instance of Quo.
var myQuo = new Quo("serene");
document.writeln(myQuo.get_status( )); // serene