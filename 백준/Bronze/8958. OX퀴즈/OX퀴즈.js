let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const num = +input[0];

for (let i = 1; i <= num; i++) {
  let quiz = input[i].trim().split("");
  let count = 1;
  let answer = 0;
  for (let i = 0; i < quiz.length; i++) {
    if (quiz[i] == "X") {
      count = 1;
    } else {
      answer += 1 * count;
      count++;
    }
  }
  console.log(answer);
}