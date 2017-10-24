// function * defines generator functions.

function *nameList(){
    yield "Sam";
    yield "Tyler";
}

// Generator functions shorten iterator code:
let post = {
    title: "This",
    replies: 28
}

post[Symbol.iterator] = function *(){
    let properties = Object.keys(this); // returns an array with property names
    for(let p of properties){
        yield this[p];
    }
};