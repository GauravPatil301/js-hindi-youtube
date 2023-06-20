//Using Iteration
let num = 15;
let a = 0, b = 1;

// Here we are printing 0th and 1st terms
console.log(a + " , " + b + " , ");

let nextTerm;

// printing the rest of the terms here
for (let i = 2; i < num; i++) {
  nextTerm = a + b;
  a = b;
  b = nextTerm;
  console.log(nextTerm + " , ");
}

//  Using Recursion
let a = 0, b = 1, nextTerm;

function fib(n) {
  if (n > 0) {
    nextTerm = a + b;
    a = b;
    b = nextTerm;

    console.log(nextTerm + " , ");
    fib(n - 1);
  }
  return 0;
}

let n = 15;
// Here we are printing 0th and 1st terms
console.log(a + " , " + b + " , ");

// n-2 as 2 terms already printed
fib(n - 2);


//  Using Formula
let a = 0, b = 1, nextTerm;

function fib(n) {
  let f = new Array(n + 1);

  f[0] = 0;
  f[1] = 1;

  console.log(f[0] + " , " + f[1] + " , ");

  for (let i = 2; i < n; i++) {
    f[i] = f[i - 1] + f[i - 2];
    console.log(f[i] + " , ");
  }
}

let n = 20;
fib(n);
