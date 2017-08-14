//We create function objects with function literals.

//Function literals look like this:
var addOne = function incrementByOne(x) {
	return x ++;
};

//Function literals have the reserved word function.
//The can optionally contain a function name, in this 
//case incrementByOne.  Without a name, the function
//is "anonymous."  The parameters go between the ().
//We separate more than one parameter names with a 
//comma followed by a space.  The code to execute goes
//between the {}s.  We call this code the body of the
//function.  Closure is when we nest functions in functions.
//The inner function has access to the outer function's variables.