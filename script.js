0; // this is a comment, which means that javascript will not try to execute this part;
123456789;
12345.6789;
Infinity;
-13434;
-Infinity;
-0;

var kitty; // declared a variable for store space in memory;

kitty = 5; // definition with a data type of number with the value 5

var Kitty = 24; // semi are end of statement, this line has a definition and declaration

console.log(kitty);

kitty = Kitty; // = assignment operator, right to left

console.log(kitty);

var doggy; // declared a variable but not defined a value
console.log(doggy); // undefined

// numbers, undefined, strings

var prose = 'asdcfglskf dsknal "lnnslnl"  '; // ' is a string delimiter
var moreprose = "i said 'something' lorem";

// booleans are either true or false

var x = true;
x = false;

//objects

var ball = {}; // empty object
ball = null; // null is a datatype in javascript

// operators
5 + 5;
kitty = 5 + 5;
var kitty; // becomed undefined because we are now referribg to a new place

kitty = 5 + "5"; // string concatenation operator
console.log(kitty);

console.log(kitty+ "asdfghjkl");