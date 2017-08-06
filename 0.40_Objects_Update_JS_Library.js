//We can both update and replace object values by assignment.
//for example, stooge['first-name'] = 'Larry'
//changes the first-name value from 0.39 from Curley to Larry.

var stooge = {
 "first-name": "Curley",
 "last-name": "theStooge"
};

stooge['first-name'] = 'Larry';

//If an object doesn't have that property name, then we add it to
//the object with the methods below.

stooge['middle-name'] = 'Danger';
stooge.nickname = 'Space Cowboy';

stooge.pets = {
 dog: 'Spot'
};
