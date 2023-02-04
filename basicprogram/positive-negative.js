// //Brute force

let num = 5;

//Conditions to check if the number is negative or positive
if (num > 0) {
  console.log("The number is positive");
} else if (num < 0) {
  console.log("The number is negative");
} else {
  console.log("Zero");
}


//Using nested if-else statement
let num1 = -5;

if(num1 => 0){
  if(num === 0){
    console.log("zero")
  }else{
    console.log("The number is positive");
  }
}else{
  console.log("The number is negative");
}


// Using ternary operator
let num2 = 0;
if(num2 === 0){
  console.log("zero")
}else{
   let result = num2>0 ? "The number is positive" : "The number is negative";
   console.log(result)
}