//The for in statement loops over all the property names in an object.  
//We can either exclude functions and prototype properties with either
//if (typeof[property] !== 'function')
//or if (hasOwnProperty(property) === true)

//The order we get using for in loops might not be the order we want.
//So we can get the order we want when we loop,
//we can create arrays in the order we want, then use for loops.

//for example:
var stoogeName = [
    'first-name',
    'middle-name',
    'last-name'
];
for (var i = 0; i < stoogeName.length; i++){
	document.writeln(properties[i]);
}

//writeln returns a new line after each statement