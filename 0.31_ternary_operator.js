// The ternary operator (?) takes three operands.  An operand is a quantity on which an 
// operation is done. 

//If the first operand is truthy, the ternary operator returns
// the value of the second operand. If the first operand is falsy, the ternary operator
// returns the value of the third operand.

//ternary operators follow this syntax:
// condition? return value if true : return value if false;
//for example:

var a = 2

var evenOrOdd = (a % 2) == 0 ? "Even" : "Odd";

//This will return "Even" because 2 modulus 2 is zero.