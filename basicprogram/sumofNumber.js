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
