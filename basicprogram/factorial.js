//Iterative approach for factorial
let num = 12345;
let sum = 0;

while (num !== 0) {
sum += num % 10;
num = Math.floor(num / 10);
}

console.log("Sum of digits: " + sum);

//Recursive approach for factorial
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Driver method
let num = 6;
console.log("Factorial of " + num + " is " + factorial(num));