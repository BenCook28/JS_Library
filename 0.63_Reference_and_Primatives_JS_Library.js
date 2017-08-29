// Primitives are copied and passed by 
// copying the value. Primatives include the
// Boolean, null, undefined, String, and Number
// data types.

// Objects, arrays, and functions are 
// copied and passed into functions
// by reference to a place in memory.

var Arr = [];
// Arr contains the array's address in memory.

var reference = [1];
var refCopy = reference;

// When the equality operators, == and ===, are 
// used on reference-type variables, they check 
// the reference. If the variables contain a reference 
// to the same item, the comparison will result in true.

// We can compare the contents of objects in memory by 
// converting the object contents to strings as shown below.

var arr1 = ['Hi!'];
var arr2 = ['Hi!'];

var arr1str = JSON.stringify(arr1);
var arr2str = JSON.stringify(arr2);

console.log(arr1str === arr2str); // true

// JSON.stringify will cause problems if some of the properties are
//  functions or undefined as it skips those values. A safer option 
//  would be to recursively loop through the objects and make sure 
//  each of the properties is the same.

// If we push to reference 2, refCopy will 
// also show [1, 2].

// Pure functions don’t affect anything in the outside scope
// We can get copies of objects without touching the reference using
// the syntax below:

function changeAgePure(person) {
    var newPersonObj = JSON.parse(JSON.stringify(person));
    newPersonObj.age = 25;
    return newPersonObj;
}

// JSON.parse turns the string back into an object.