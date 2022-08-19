let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const inputTotal = +input[0];
let answer = "";
for (let i = 1; i <= inputTotal; i++) {
  input[i] = input[i].split(" ").map((n) => +n);
  answer += input[i][0] + input[i][1] + "\n";
}
console.log(answer.slice(0, -1));
