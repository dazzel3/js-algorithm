let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const total = +input[0];
const list = input[1].split(" ").map(Number);
let min = list[0];
let max = list[0];
for (let i = 1; i < total; i++) {
  if (min > list[i]) {
    min = list[i];
  }
  if (max < list[i]) {
    max = list[i];
  }
}
console.log(min, max);
