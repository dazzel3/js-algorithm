let fs = require("fs");
let input = +fs.readFileSync("/dev/stdin").toString().trim();

function self(n) {
  if (n <= 1) {
    return 1;
  }
  return n * self(n - 1);
}

console.log(self(input));