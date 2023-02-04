//method 1 Brute Force
let number = 20;
if(number %2 == 0){
    console.log(`${number} is Even`);
}else{
    console.log(`${number} is Odd`);
}


//Method 2 ternary operator
let number2 = 21;
let result = number2% 2 == 0 ? ' is Even': ' is odd';
console.log(number2+result) 

//Method 3 bitwise operator
// function isEven(number){
//     return !(number & 1)
// }

// let number = 29;
// if(isEven(number)){
//     console.log("Even")
// }else{
//     console.log("odd")
// }