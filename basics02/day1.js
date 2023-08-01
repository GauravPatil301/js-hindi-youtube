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

// Question 5: Find nth fibonacci number
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

let fibonacci= function (n) {
    if(n <  2){
        return n;
    }
    let previous = 0, current = 1, next;
    for(let i=2;i<=n;i++){
        next = previous + current;
        previous = current;
        current = next;
    }
    return next;
}
// fibonacci sequence: 0 1 1 2 3 5 8...
console.log(fibonacci(5)) //5
console.log(fibonacci(10)) //55

// Question 6: Missing Number
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

let missingNumber = function(nums) {
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
    }
    return nums.length*(nums.length+1)/2 - sum;
};

// one line solution:
let missingNumber = (nums) => nums.length*(nums.length+1)/2 - nums.reduce((acc,num)=> num + acc);
console.log(missingNumber[3,0,1]) // 2
console.log(missingNumber[9,6,4,2,3,5,7,0,1]) // 8
