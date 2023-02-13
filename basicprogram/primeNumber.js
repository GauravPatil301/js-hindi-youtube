//Write a program to check if a given number is prime or not in javascript
//Simple iterative solution

function checkPrime(n){
    let count =0;
    // negative numbers , 0 and 1 are not prime
    if(n<2){
        console.log("The given number "+n+" is not prime");
        return;
    }
    
    // checking the number of divisors between [1,n]
    for(let i=1;i<=n;i++){
        if(n%i===0){
            count++;
        }
    }
    //if count of divisors greater than 2 then it's not prime
    if(count >2){
        console.log("The given number "+n+" is not prime");
    }else{
        console.log("The given number "+n+" is prime");
    }
}

let n=23;
checkPrime(n)


// Optimization by break condition

function isPrime(n) {
    let isprime = true;
    
    // 0 and 1 are not prime numbers, also negative numbers are not prime
    if (n < 2) {
      isprime = false;
    } else {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          isprime = false;
          break;
        }
      }
    }
    
    let result = isprime ? "Prime" : "not Prime";
    console.log("The number " + n + " is: " + result);
  }
  
  let n = 13;
  isPrime(n);
  
  // Time Complexity: O(N)
  // Space Complexity: O(1)
  // This program is better than the previous version as:
  // Condition for 0, 1 and negative numbers is checked earlier
  // Loop runs between [2, n-1] rather than [1, n]
  
  
  // Optimization by n/2 iterations

  function isPrime(n) {
    let isprime = true;
    
    // 0 and 1 are not prime numbers, also negative numbers are not prime
    if (n < 2) {
      isprime = false;
    } else {
      // Running the loop until n is wasteful because for any number n, the numbers in
      // the range (n/2 + 1, n) won't be divisible anyways.
      for (let i = 2; i <= n/2; i++) {
        if (n % i === 0) {
          isprime = false;
          break;
        }
      }
    }
    
    let result = isprime ? "Prime" : "not Prime";
    console.log("The number " + n + " is: " + result);
  }
  
  let n = 33;
  isPrime(n);
  
  // Time Complexity: O(N)
  // Space Complexity: O(1)
  // This program is better than the previous version as:
  // Loop runs between [2, n/2] rather than [2, n-1]

  


  function isPrime(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= n / 2; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  let n = 33;
  let result = isPrime(n) ? "Prime" : "not Prime";
  console.log("The number " + n + " is : " + result);
  
  // Time Complexity : O(N)
  // Space Complexity : O(1)

  

  function isPrime(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  let n = 29;
  let result = isPrime(n) ? "Prime" : "not Prime";
  console.log("The number " + n + " is : " + result);
  
  // Time Complexity : O(√N)
  // Space Complexity : O(1)
  