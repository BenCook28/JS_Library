// Iterables return an iterator object.
// We can iterate through objects with
// an iterator object as shown below:

let post = {
    title: "This",
    replies: 28
}

post[Symbol.iterator] = function(){
    let properties = Object.keys(this); // returns an array with property names
    let count = 0; // lets us access the properties array by index
    let isDone = false;

    let next = () => {
        if(count >= properties.length){
            isDone = true;
        }
        return { done: isDone, value: this[properties[count++]] };
    }
    return {next};

    for(let p of post){
        console.log(p);
    }
};