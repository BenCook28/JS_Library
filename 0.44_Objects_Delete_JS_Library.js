//The delete operator removes a property from an object if 
//the object has that propery.  Delete doesn't touch
//any objects in the prototype linkage.  

//when we delete properties, we see the property from the prototype linkage.

//Say we create the a second stooge object called stooge2 with the properties below:

var stooge2 = {
 "first-name": "Moe",
 "last-name": "theStooge"
};

//if we type delete stooge2.first-name,
// we get a stooge2.first-name return value of "Curley"