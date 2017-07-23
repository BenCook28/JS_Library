//for loops work especially well when we know how many times to iterate. Example below:
for(var i = 1; i <= 10; i++){
	console.log(i);
}

//the above counts to 10.

//howevever, we can also use for loops when we don't know how often to iterate. For example, 
//we often use for loops to determine whether an object has a property. Example below:

//for (myvar in obj) {
//  for (object in objects) {

//  if (obj.hasOwnProperty(myvar)) {
//  	console.log(object);
//  }
// }