let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const testCaseNum = +input[0];
for (let i = 1; i <= testCaseNum; i++) {
  let num = input[i].split(" ").map((n) => +n);
  console.log(num[0] + num[1]);
}