// Question 1: sum of all natural numbers from 1 to n
// sum of 1 to 5: 15
 
function sumOfNaturalNumber(num) {
    // let sum =0;
    // for (let i = 1; i <=num; i++) {
    //     sum = sum + i;
    // }
    // return sum;
    return num*(num+1)/2;
}
console.log(sumOfNaturalNumber(3))


// Question 2: Sum of digits of a number
// 1234: 1 + 2 + 3 + 4 = 10

function sumOfDigits(num){

    let sum=0;
    while(num>0){
        sum += num%10;
        num=Math.floor(num /= 10);
    }
    return sum;
}
console.log(sumOfDigits(101))

// Question 3 
// count the number of digits of a number 

let count =0;

function countDigits(num) {
    num = Math.abs(num)
    while (num>0) {
        num = Math.floor(num/10);
        count++;
    }
    return count;
}
console.log(countDigits(-10))

// Question 4: Given an integer x, return true if x is a palindrome, and false otherwise.
// A palindrome number is a number that remains the same when digits are reversed

let palindrome = function (x) {
    let copyNumber = x;
    let reverseNum=0;
    while(copyNumber>0){
        const lastDigit= copyNumber % 10;
        reverseNum = reverseNum*10 + lastDigit;
        copyNumber = Math.floor(copyNum/10);
    }
    return x === reverseNum;
}

