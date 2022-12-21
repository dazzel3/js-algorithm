let fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();

let f = Array(input).fill(0);

const fib = (n) => {
  if (n === 1 || n === 2) return 1;
  else return fib(n - 1) + fib(n - 2);
};

console.log(fib(input));

const fibonacci = (n) => {
  f[1] = f[2] = 1;
  let count = 0;
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
    count += 1;
  }
  return count;
};

console.log(fibonacci(input));