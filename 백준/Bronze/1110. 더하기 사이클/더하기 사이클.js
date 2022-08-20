let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
if (input.length == 1) {
  input = "0" + input;
}
let a = +input.slice(0, 1);
let b = +input.slice(1);
let num = a + b;
let count = 0;
let result;
while (+input != +result) {
  if (num.toString().length == 1) {
    result = b.toString() + num.toString();
  } else {
    result = b.toString() + num.toString()[1];
  }
  a = +result.slice(0, 1);
  b = +result.slice(1);
  num = a + b;
  count++;
}
console.log(count);