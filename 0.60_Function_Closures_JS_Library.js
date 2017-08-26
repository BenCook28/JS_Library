var global = 'this is from the global variable';

function outer(string) {
    var outer = 'this is from the outer function';
    console.log('this is the outer function');
    function inner() {
        console.log('this is the inner function. Within this function I have access to the outer functions variables');
        console.log('For example I can use the outer variable ' + outer);
        console.log('I can also use the outer function parameters ' + string);
        console.log('Lastly I still have access to variables in the global scope ' + global);
    }
    inner();
}
outer('this is from the parameter of the outer function');






// INCORRECT EXAMPLE
// This is a function that assigns event handler functions to dom elements.
// When you click on a node, an alert box is supposed to display the index of the node.
// But it always displays the number of dom elements instead.
var myNodeList = document.querySelectorAll("p");

var add_the_handlers = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (e) {
            alert(i);
        };
    }
};

add_the_handlers(myNodeList);
// The add_the_handlers function was intended to give each handler a unique number
// (i). It fails because the handler functions are bound to the variable i, not the value of
// the variable i at the time the function was made.




// CORRECT EXAMPLE
// Make a function that assigns event handler functions to the dom elements the correct way.
// When you click on a node, an alert box will display the index of the node.
var myNodeList = document.querySelectorAll("p");

var add_the_handlers = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (i) {
            return function (e) {
                alert(i);
            };
        }(i);
    }
}
add_the_handlers(myNodeList);




// Closure Example for animation
// this function uses a closure alongside the setTimeout function to slowly change the background color of a page
var fade = function (node) {
    var level = 1;
    var step = function () {
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 50);
        }
    };
    setTimeout(step, 100);
};
fade(document.body);




// Silver Challenge: Write a function that would allow you to do this:
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27


// Silver Challenge solution
function createBase(num){
    function doMath(){
       return num + 6;
    }
    return createBase;
}
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27  




// Gold Challenge
console.log('Hello');
setTimeout(function(){
    console.log('Goodbye');
},2000);
console.log('Hello Again');

// Gold Challenge Solution
console.log('Hello');
setTimeout(function(){
    console.log('Goodbye');
    function hello(){
        console.log('Hello again');
    }
    hello();
},2000);