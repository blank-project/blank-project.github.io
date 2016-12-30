// Recursive method
function fact(number) {
    if (number <= 0) {
        return 1;
    } else {
        return number*fact(number-1);
    }
}

// Iterative method
function factIterative(n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factIterative(process.argv[2]));
