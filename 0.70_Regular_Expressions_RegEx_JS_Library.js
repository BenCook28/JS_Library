// When we search through a text editor, we can click the box with .* in it for RegExs.
// Here's a list of single meta-characters:
\d // is any digit 0-9
\w // with a lower case w is A-Za-z0-9.  w statnds for word.
\s // is any whitespace.
. // is any character whatsoever.

\D // is anything that's not a \d.
\W // is anything that's not a \w.
\S // is anything that's not a \s.

// qualifyers:
* // means zero or more.
+ // means one or more.
? // means zero or one.
{min, max} // self explanatory.
{n} // how many times.

\w{5} // gets all five-plus letter words.
colou?rs? //colors with optional u and optional s.

// position:
^ // at beginning of line
$ // at end of line
\b // word boundary

^w+$ // returns one word per line lines
\b\w{4}\b // returns four letter words
\b\w{4, 9}\b // returns four to nine letter words

// Character classes
// Go in []s.
// \ escapes things like . (dot)