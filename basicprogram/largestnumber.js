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