let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let max = Math.max(...input);
console.log(max);
console.log(input.indexOf(max) + 1);