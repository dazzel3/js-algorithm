let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let answer;
let i = 0;
while (true) {
  answer = input[i].split(" ").map((n) => +n);
  if (answer[0] == 0 && answer[1] == 0) break;
  console.log(answer[0] + answer[1]);
  i++;
}