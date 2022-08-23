let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let firstNum = input[0].split("");
let lastNum = input[1].split("");
firstNum = +(firstNum[2] + firstNum[1] + firstNum[0]);
lastNum = +(lastNum[2] + lastNum[1] + lastNum[0]);
console.log(firstNum > lastNum ? firstNum : lastNum);