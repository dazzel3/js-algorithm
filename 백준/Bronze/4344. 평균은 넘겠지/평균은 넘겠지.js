let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const num = +input[0];
for (let i = 1; i <= num; i++) {
  let score = input[i].trim().split(" ").map(Number).slice(1);
  let avg = score.reduce((prev, curr) => prev + curr) / score.length;
  let count = 0;
  let result = 0;
  for (let i = 0; i < score.length; i++) {
    if (score[i] > avg) {
      count++;
    }
  }
  result = ((count / score.length) * 100).toFixed(3);
  console.log(`${result}%`);
  avg = 0;
}
