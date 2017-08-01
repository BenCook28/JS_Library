//Array literals follow the following syntax:
//for one item in an array: [item]
//for multiple items: [item0, item1, item2]

//regex literals:
//Regular expressions are patterns used to match character combinations 
//in strings. In JavaScript, regular expressions are also objects. These patterns 
//are used with the exec and test methods of RegExp, and with the match, replace, 
//search, and split methods of String. 

//So the errors don't cause error message, I'll define variables below:
var a = 1;
var b = 2;
var c = 3;
//A regex literal is a pattern between forward slashes.  For example:
var reg = / b + c /

//We can also build regex's using constructors.  For example:
var reg1 = new RegExp(a + b);