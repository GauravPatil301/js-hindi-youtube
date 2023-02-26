const score = 400;
console.log(score) // 400
const balance = new Number(100)
console.log(balance);  //[Number:400]

console.log(balance.toString().length);   // 3
console.log(balance.toFixed(2))           // 100.00

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3)); // 23.9

const otherNumber1 = 123.8966;
console.log(otherNumber1.toPrecision(3));  // 124

const hundereds = 1000000
console.log(hundereds.toLocaleString()); // 1,000,000
console.log(hundereds.toLocaleString('en-IN')); // 10,00,000   //for indian standard number system

// ++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++

console.log(Math) // Object [Math] {}
console.log(Math.abs(-4));  // 4 absolute value return = .abs()
console.log(Math.round(4.3));  // 4
console.log(Math.ceil(4.2));  // 5
console.log(Math.floor(4.2)) // 4
console.log(Math.min(4,3,5,6))   // 3
console.log(Math.max(4,3,5,6))  // 6
console.log(Math.random())  // 0.11111111111111111
console.log((Math.random()*10)+1)  // 6.11111111111111111
console.log(Math.floor(Math.random())+1)  // 6

// for range between 10 to 20 random number generator
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);  // 19

