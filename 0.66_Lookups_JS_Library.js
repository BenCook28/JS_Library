// To summarize, property lookups through the JavaScript 
// prototype chain work as follows:

// If the object has a property with the given name, 
// that value is returned. (The hasOwnProperty method 
// can be used to check if an object has a particular
// named property.)  If the object does not have the 
// named property, the object’s prototype is checked
// Since the prototype is an object as well, if it does
// not contain the property either, its parent’s prototype 
// is checked. This process continues up the prototype chain
// until the property is found. If Object.prototype is reached 
// and it does not have the property either, the property is 
// considered undefined.