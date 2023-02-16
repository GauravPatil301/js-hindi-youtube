// without while loop
function main() {
    let base = 1.5;
    let expo1 = 2.5;
    let expo2 = -2.5;
    let res1, res2;
  
    // calculates the power
    res1 = Math.pow(base, expo1);
    res2 = Math.pow(base, expo2);
    console.log(base + " ^ " + expo1 + " = " + res1);
    console.log(base + " ^ " + expo2 + " = " + res2);
  }
  
  main();

  // with while loop
  function main() {
    let base = 2;
    // Works only when exponent is positive integer
    let expo = 2;
    let res = 1.0;
  
    while (expo !== 0) {
      res *= base;
      expo--;
    }
  
    console.log("Result = " + res);
  }
  
  main();