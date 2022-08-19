let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const inputTotal = +input[0];
const num = +input[1];
let total = 0;
for (let i = 2; i <= 1 + num; i++) {
  input[i] = input[i].split(" ").map((n) => +n);
  total += input[i][0] * input[i][1];
}
if (total == inputTotal) {
  console.log("Yes");
} else {
  console.log("No");
}