let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const num = +input[0];
for (let i = 1; i <= num; i++) {
  let test = input[i].split(" ");
  const repeatNum = +test[0];
  let str = test[1].split("");
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    answer += str[i].repeat(repeatNum);
  }
  console.log(answer);
}