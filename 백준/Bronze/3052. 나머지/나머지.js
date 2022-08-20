let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let rest = [];
for (let i = 0; i < input.length; i++) {
  rest.push(input[i] % 42);
}
let result = rest.filter((v, i) => rest.indexOf(v) == i);
console.log(result.length);