let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const num1 = BigInt(input[0]);
const num2 = BigInt(input[1]);
console.log(String(num1 + num2));