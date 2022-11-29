let fs = require('fs');
let input = +fs.readFileSync('/dev/stdin').toString().trim();

const fibbo = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibbo(n - 1) + fibbo(n - 2);
};

console.log(fibbo(input));