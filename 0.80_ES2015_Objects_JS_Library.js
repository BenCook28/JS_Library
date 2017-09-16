// We can remove duplicate variable names 
// from object properties when those properties
// have the same name as the variables assigned
// to them.

// We can also write less code using Object Destructuring.
let { first, last, fullName } = buildUser("Ben", "Franklin");

// We can explicitly choose which properties to destructure.

// Method Initializer Shorthand:
return {
    isActive(){ // We no longer have to type function.
    return true;
    }
}