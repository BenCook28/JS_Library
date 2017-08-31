// Call invokes the function and allows you 
// to pass in arguments one by one.Apply invokes
// the function and allows you to pass in arguments 
// as an array. Bind returns a new function, allowing 
// you to pass in a this array and any number of arguments.

// To remember the difference between call and bind, 
// Call is for comma (separated list) and Apply is for Array.

// call() accepts an argument list, while apply() 
// accepts a single array of arguments.

// We can use bind for events like onClick where
// we don’t know when they’ll be fired but we know 
// what context we want them to have.