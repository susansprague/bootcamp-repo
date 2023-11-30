//Primitive data types include undefined, string, number and boolean
//Undefined variables haven't been assigned values yet.
let myUndefined;

// A string is a series of characters and is surrounded by quotes 
let myStringWelcome = "Hello World"; 
let myStringPassword = "865Password!2020";

// A number can be either an integer or a decimal  
let myNumberInt = 100;
let myNumberDecimal = 100.100;

// Booleans have two values: true or false
let isMyBooleanTrue = true;
let isMyBooleanFalse = false;

// To check the type of data, use typeof followed by the name of the variable
// Logs undefined
console.log(typeof myUndefined);

// Logs number
console.log(typeof myNumberInt); 

// Logs boolean
console.log(typeof true);

// Logs string
console.log(typeof "Howdy");

// Pro-tip: JavaScript is loosely typed, so the type is tied to the value held in the variable, not the variable itself!
// Logs number
let myVariable = 33;
console.log(typeof myVariable);

// myVariable is reassigned; Logs boolean
myVariable = false;
console.log(typeof myVariable);
