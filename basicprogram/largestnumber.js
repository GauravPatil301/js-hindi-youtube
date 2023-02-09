// using if-else statements
let num1 = 10,num2 = 20;
// console.log(num1,num2)
if(num1 == num2){
 console.log("both are equal")   
}else if(num1>num2){
    console.log(num1+" is greater")
}else{
    console.log(num2+" is greater")
}  

// ternary operator
let num1 = 10,num2 = 20, temp;
if(num1 == num2){
    console.log("both are equals")
}else {
    temp = num1 > num2 ? num1 : num2;
    console.log(temp+ " is largest")
}

// Using inbuilt max Function
let num1 = 12,num2 = 21;
if(num1 == num2){
    console.log("Both are equal")
}else{
    console.log(Math.max(num1,num2)+" is greater")
}

//

let year = 2020;

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(year + " is a Leap Year");
} else {
  console.log(year + " is not a Leap Year");
}


let year = 2019;

let flag = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0) ? 1 : 0;
if (flag === 1) {
  console.log(year + " is a Leap Year");
} else {
  console.log(year + " is not a Leap Year");
}

let year = 2020;
let leap;

if (year % 400 === 0) {
  leap = true;
} else if (year % 4 === 0 && year % 100 !== 0) {
  leap = true;
} else {
  leap = false;
}

if (leap) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}