let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let answer;
let i = 0;
while (i < input.length) {
  answer = input[i].split(" ").map((n) => +n);
  console.log(answer[0] + answer[1]);
  i++;
}