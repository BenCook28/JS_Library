// We use maps when keys are unknown until 
// runtime, but we can use objects if 
// we previously define keys.
// We use maps when all keys are the same
// type and all values are the same type.

// We can iterate over maps with for of loops.
// as shown below:

let mapSettings = new Map();
mapSettings.set("user", "Ben");
mapSettings.set("replies", ["Hi", "Howdy"]);

for(let [key, value] of mapSettings){
    console.log(`${key} = ${value}`);
}