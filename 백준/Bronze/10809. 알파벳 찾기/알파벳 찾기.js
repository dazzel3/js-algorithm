let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("");
let answer = "";
for (let i = 0; i < 26; i++) {
  let alpha = String.fromCharCode(97 + i);
  if (input.includes(alpha)) {
    answer += input.indexOf(alpha) + " ";
  } else {
    answer += -1 + " ";
  }
}
console.log(answer.trim());