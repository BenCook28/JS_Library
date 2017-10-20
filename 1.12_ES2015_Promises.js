// The Promise constructor takes an
// anonymous function with 2 callback
// arguments known as handlers.

function getPollResultsFromServer(pollName){
    return new Promise(function(resolve, reject){
        //...
        resolve(someValue);
        // ...
        reject(someValue);
    });
}

// Promises are pending and then either fulfilled
// or rejected.