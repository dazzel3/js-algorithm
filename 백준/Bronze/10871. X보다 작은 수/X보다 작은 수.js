let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const total = +input[0].split(" ")[0];
const num = +input[0].split(" ")[1];
let list = input[1].split(" ").map((n) => +n);
let answer = "";
for (let i = 0; i < total; i++) {
  if (list[i] < num) {
    answer += list[i].toString() + " ";
  }
}
console.log(answer.trim());