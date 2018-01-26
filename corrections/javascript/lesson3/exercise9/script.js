function fibonnacci(n) {
  if (n === 0) return 1;
  return n + fibonnacci(n-1);
}

console.log(fibonnacci(2));
