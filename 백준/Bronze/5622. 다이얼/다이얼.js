let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("");
let info = {
  2: ["A", "B", "C"],
  3: ["D", "E", "F"],
  4: ["G", "H", "I"],
  5: ["J", "K", "L"],
  6: ["M", "N", "O"],
  7: ["P", "Q", "R", "S"],
  8: ["T", "U", "V"],
  9: ["W", "X", "Y", "Z"],
};

const key = Object.keys(info);
let sum = 0;
for (let i = 0; i < input.length; i++) {
  sum += +key.find((k) => info[k].includes(input[i])) + 1;
}
console.log(sum);