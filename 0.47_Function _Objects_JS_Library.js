//Functions in JavaScript are objects.
//Objects are collections of key, value pairs linked
//to a prototype object.  JS links function objects
//to Function.prototype, which it links to Object.prototype.

//JS also creates every function with the function's context
//and code that implements the function's behavior.  

//While similar, scope is function-based while context is object-based. 
//Scope pertains to the variable access of a function when it is invoked 
//and is unique to each invocation. Context is the value of the this
//keyword which is a reference to the object that owns the currently executing code.

// Every function object is created with a prototype property. Its value is an object
// with a constructor property whose value is the function. 

// Since functions are objects, they can be used like any other value. Functions can be
// stored in variables, objects, and arrays. Functions can be passed as arguments to
// functions, and functions can be returned from functions. Also, since functions are
// objects, functions can have methods.

//Functions can be invoked, which means they can be called.