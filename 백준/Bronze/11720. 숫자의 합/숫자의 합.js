let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const num = +input[0];
let list = input[1].split("").map(Number);
let sum = 0;
for (let i = 0; i < num; i++) {
  sum += list[i];
}
console.log(sum);