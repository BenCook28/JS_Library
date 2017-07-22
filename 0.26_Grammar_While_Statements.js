//While Statements perform one loop as long a logical expression evaluates to true.
//for example, the code below will never end until the computer crashes:
//while(true){
	// console.log("I love you");
// }
//such an occurance is called an infinite loop.
//When testing loops, I choose to test them in repl.it because a crashed browser does less damage
//than a crashed computer

//the statement below counts to 10.  
var i = 1;
while (i <= 10){
	console.log(i);
	i++;
}
//To avoid infinite loops, I declared the variable i outside the loop and incremented i.