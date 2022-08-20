let fs = require("fs");
let input = +fs.readFileSync("/dev/stdin").toString();
for (let i = 0; i < input; i++) {
  console.log(" ".repeat(input - (i + 1)) + "*".repeat(i + 1));
}