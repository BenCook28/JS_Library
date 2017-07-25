// Used to try executing a block of code, then spit out errors you find.
//catch declares a new variable which stores the error spat out.

//Here's an example:
try {
    console.log(a);
}
catch(err) {
    console.log(err.message);
}

//the catch now contains a string which says "a is not defined"

//the below should work, and err.message will be undefined because there's no error.:
try {
	var a = "Hello world!"
    console.log(a);
}
catch(err) {
    console.log(err.message);
}