// This is a new object within a function
// when calling a function

function ConstructorExample() {
    console.log(this);
    this.value = 10;
    console.log(this);
}

new ConstructorExample();

// -> ConstructorExample {}
// -> ConstructorExample { value: 10 }

// If we use apply, call, or bind to call a 
// function, this inside the function is the 
// object that is passed in as the argument.

// If a function is called as a method, this is
//  the object that the function is a property of.

// If a function is invoked as a free function invocation,
//  meaning it was invoked without any of the conditions 
//  present above, this is the global object. In a browser, it’s window.

// If multiple of the above rules apply, the rule that is higher will set the this value.