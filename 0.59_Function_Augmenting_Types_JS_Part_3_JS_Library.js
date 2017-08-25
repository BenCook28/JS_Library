// By augmenting the basic types, we can make significant improvements to the expressiveness
// of the language. Because of the dynamic nature of JavaScript’s prototypal
// inheritance, all values are immediately endowed with the new methods, even values
// that were created before the methods. The prototypes of the basic types are public structures, 
// so we must be carefule when mixing libraries. As a defensive measure, we add a method only
// if the method is known to be missing as shown below:

Function.prototype.method = function (name, func) {
 if (!this.prototype[name]) {
 this.prototype[name] = func;
 }
};
// Another concern is that the for in statement interacts badly with prototypes. We
// can use the hasOwnProperty method to screen out inherited properties, and we can 
// look for specific types.