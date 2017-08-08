//We can use the typeof operator to determine the type of a property

//typeof stooge.age  returns 'number'
//type of stooge.first-name returns 'string'
//typeof stooge.pets returns 'object'
//type of stooge.favoriteColor returns 'undefined'

//Typeof functions like .toString return 'function', even if they're not part
//of the object.  Likewise, typeof .constructor returns function.
//.constructor refers to the object constructor function which made the object.

//To make sure we don't get function values that don't belong to the object, we 
//can use the hasOwnProperty method.  For example:
// stooge.hasOwnProperty('age') // true
// stooge.hasOwnProperty('constructor') // false