// Arrays don't enforce uniqueness of items.
// Sets look like this:

let tags = new Set();

// and we add to Sets as shown below:
tags.add("tech");
tags.add("investing");

// We can iterate through sets.
for(let tag of tags){
    console.log(tag);
}