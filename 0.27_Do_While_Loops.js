//similar to while loopos, but execute code at least once before testing the condition.
//the block will therefore execute at least once.
//Again, it's important to test in Repl.it to avoid infinite loops.

//Here's an example:
var i = 0;
do {
    console.log(i);
    i++;
}
while (i <= 10);

//You might use this if you want to send a reminder to someone at least once.
//If they do the requested action, no further reminders neccessary.
//otherwise, but the person until they act.