let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const num = +input[0];
let nAnswer = "";
for (let i = 1; i <= num; i++) {
  let info = input[i].split(" ").map((n) => +n);
  let answer = info[2] % info[0];
  if (answer === 0) {
    answer = info[0];
  }
  let room = Math.ceil(info[2] / info[0]);
  room < 10 ? (room = String(0) + room) : room;
  nAnswer += `${answer}${room}` + "\n";
}
console.log(nAnswer.trim());