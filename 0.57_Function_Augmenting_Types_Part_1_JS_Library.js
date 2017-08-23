// JavaScript allows the basic types of the language to be augmented. Adding a method 
// to Object.prototype makes that method available to all objects. 

This also works for
// functions, arrays, strings, numbers, regular expressions, and booleans.

// By augmenting Function.prototype, we can make a method available to all functions:

Function.prototype.method = function (name, func) {
 this.prototype[name] = func;
 return this;
};

// By augmenting Function.prototype with a method method, we no longer have to type
// the name of the prototype property.