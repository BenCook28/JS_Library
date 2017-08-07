//We pass objects by reference.

var stooge = {
 "first-name": "Larry",
 "middle-name": "Danger",
 "last-name": "theStooge",
 "nickname": "Space Cowboy"
};


var x = stooge;

x.middle-name // returns "Danger"

var wisestStooge = stooge.first-name // returns "Larry"

//Different variables can refer to the same object.