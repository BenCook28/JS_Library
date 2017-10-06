// Array destructuring looks like this:
let users = ["Larry", "Moe", "Curley"];
let [a, b, c] = users;

// Or with less code, we can use rest parameters:
let [first, ...rest] = users;

// The for ... of loop iterates over property values.
// Instead of 
for (let name in names){
    console.log(names[name]);
}
// we can do
for(let name of names){
    console.log(name);
}