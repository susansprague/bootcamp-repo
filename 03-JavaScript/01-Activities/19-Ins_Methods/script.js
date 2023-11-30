const comparisonOperators = ["Equal", "Not Equal", "Strict Equal", "Strict Not Equal", "Greater Than", "Less Than"];
const arithmeticOperators = ["+", "-", "%"];
const logicalOperators = ["and", "or", "not"];
const myString = "Hello String";

//Array Methods
// Sorts comparisonOperators array and returns the sorted array
comparisonOperators.sort(); 

//Logs sorted array
console.log(comparisonOperators);

// Adds elements to end of an array. Takes in at least one parameter
arithmaticOperators.push("%");

//Logs array with element "%" added to end
console.log(arithmaticOperators);

//Returns selected elements as a new array.
const logicalOperatorsSliced = logicalOperators.slice(0,2);

//Logs new array
console.log(logicalOperatorsSliced);

// The orginal array is unchanged
console.log(logicalOperators);

//String Methods
//Replaces "String" with "World" and returns new string
var myNewString = myString.replace("String", "World");
console.log(myNewString);

//The orginal string is unchanged
console.log(myString);
