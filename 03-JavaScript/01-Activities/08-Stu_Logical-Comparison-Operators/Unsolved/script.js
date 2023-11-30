let a = "50";
let b = 50;
let c = 100;
let d = c % b;
let e = c / 2;

let expression1 = (b === e);
let expression2 = (e < d);

// Use comparison operators so all expressions below log to the console as true
console.log(a === b);
console.log(b !== e);
console.log(c < b);
console.log(d > 0);

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && expression2);
console.log( !expression1 || expression2);
  
