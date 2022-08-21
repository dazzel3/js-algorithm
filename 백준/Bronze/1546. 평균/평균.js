let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const num = +input[0];
let score = input[1].split(" ").map(Number);
const max = Math.max(...score);
let total = 0;
for (let i = 0; i < num; i++) {
  score[i] = (score[i] / max) * 100;
  total += score[i];
}
console.log(total / num);