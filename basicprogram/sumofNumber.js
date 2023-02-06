// Using for loop
let n = 3;
let sum = 0;
for(let i=0;i<=n;i++){
    sum+=i;
}
console.log(sum)

//Using Formula for the Sum of Nth Term
let n1=10;
let result = n1 * (n1 + 1)/ 2;
console.log(result);


//Using Recursion
let n = 5;

function getSum(n) {
  if (n === 0) {
    return n;
  }
  return n + getSum(n - 1);
}

console.log(getSum(n));


/// Find the Sum of the Numbers in a Given Interval in Javascript

//Using Brute Force

let a = 5;
let b = 10;
let sum = 0;
for(let i=a;i<=b;i++){
  sum = sum + i;
}
console.log("The sum is "+ sum);


//Using formula
let num1 = 2;
let num2 = 5;
let sum = num2 * (num2 + 1) / 2 - num1 * (num1 + 1) / 2 + num1;
console.log("The Sum is " + sum);

// Using recursion
let a = 5;
let b = 10;

function getSum(sum, i, b) {
  if (i > b) {
    return sum;
  }
  return i + getSum(sum, i + 1, b);
}

console.log("The sum is " + getSum(0, a, b));
