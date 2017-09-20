// Object Assign lets us reuse code.
// An options object looks like this:
function countdownTimer(target, timeLeft, options = {}){
    //and provide default values as shown below:
    let defaults = {
        container: ".timer-display",
        timeoutSoonTime: 10
    };
    // ...
}

// Object.assign copies properties from a source object 
// to a target object specified as the first object
// as shown below:

let settings = Object.assign({}, defaults, options);

// In the case of duplicate properties, the values
// from the last object will always prevail.