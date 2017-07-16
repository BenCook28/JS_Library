// whitespace can be either spaces or comments.

/*whitespace doesn't often matter, but sometimes it does.
  for example, var box = full requires a spaces between var and box*/

// two /'s in a single row comment

/**/ /*creates a multiline comment.  I remember multi-line comments
as two people playing tennis but both sides have a ball so they're
talking to decide which ball to use.  Their dialogue doesn't affect the game*/

/**/ //can cause syntax errors, as in the following:

///*
// var rm_a = /a*/.match(s);
//*/

//so it's better to use //.

//The /**/ format came from the PL/I language since those characters were 
//rarely used.

// Comments should make code more readible and explain code.