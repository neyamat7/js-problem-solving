// Write a JavaScript function called findFactorial that calculates the factorial of a given number

// input: 5
// output: 120

// input: 3
// output: 6

// input: 7
// output: 5040


function findFactorial(num) {
  if (num < 0) {
    return "invalid";
  } else if (num === 0) {
    return 1;
  }
  let factorial = num;
  for (let i = num - 1; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}

console.log(findFactorial(5));
