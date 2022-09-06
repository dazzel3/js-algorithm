let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((n) => +n);
const V = input[2];
const A = input[0];
const B = input[1];
console.log(Math.ceil((V - B) / (A - B)));