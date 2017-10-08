// Maps are a data structure made of
// collections of key/value pairs.

// With objects as maps, keys always
// turn into strings.  Namely, "{object Object}"

// We set maps as shown below:
let user1 = { name: "Sam"};
let user2 = { name: "Tyler"};

let totalReplies = new Map();
totalReplies.set(user1, 5);
totalReplies.set(user2, 42);

// We get total replies as shown below:
console.log(totalReplies.get(user1));