// Variadic functions can accept any number
// of arguments.  The arguments object is a 
// built-in array-like object that corresponds
// to the arguments of a function.

// Parameters are the names listed in the function
// declaration, while arguments are the values passed
// to the function.

// Rest parameter syntax lets us represent an infinite 
// number of arguments as an array as shown below:

function displayTags(...tags){
    for(let i in tags){
        let tag = tags[i];
        _addToTopic(tag);
    }
}
// ... groups arguments into an array.
// rest parameters must always go last.