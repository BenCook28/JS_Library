//Global variables can cause unexpected results, and we should \
//therefore avoide them.  To do so, we can greate one global variable.
//For example, var App = {}.  App would then contain the entire application.

//For example, App.stooge = {
//  "first-name": "Curley",
//  "last-name": "theStooge"
// };

// Using only one global variable significantly reduces the chance of bad 
//interactions with other applications, // widgets, or libraries.

//The code also becomes more readible because we know we're referring 
//to the entire app.  We can also use closures to hide info
//which can limit unintended harm from global variables.