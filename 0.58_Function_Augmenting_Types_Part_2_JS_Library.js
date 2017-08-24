// JavaScript does not have a separate integer type, so it is sometimes necessary to
// extract just the integer part of a number. To do so, we can add an integer method 
// to Number.prototype. It uses either Math.ceiling or Math.floor, 
// depending on the sign of the number as shown below:

Number.method('integer', function ( ) {
 return Math[this < 0 ? 'ceiling' : 'floor'](this);
});
document.writeln((-20 / 10).integer( )); // -2

// JavaScript lacks a method that removes spaces from the ends of a string. That is an
// easy oversight to fix:

String.method('trim', function ( ) {
 return this.replace(/^\s+|\s+$/g, '');
});
document.writeln('"' + " neat ".trim( ) + '"');

// Our trim method uses a regular expression. 