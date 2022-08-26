let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const fixedCost = +input[0];
const variableCost = +input[1];
const salesCost = +input[2];

let x = fixedCost / (salesCost - variableCost);
let answer = Math.floor(x) + 1;

salesCost > variableCost ? answer : (answer = -1);
console.log(answer);
