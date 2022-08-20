let fs = require("fs");
let input = +fs.readFileSync("/dev/stdin").toString();
for (let i = 0; i < input; i++) {
  console.log("*".repeat(i + 1));
}