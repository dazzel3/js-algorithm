let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toUpperCase()
  .split("")
  .sort();
let countArr = [];
let count = 1;

for (let i = 0; i < input.length; i++) {
  if (input[i] != input[i + 1]) {
    countArr.push(count);
    count = 1;
  } else {
    count++;
  }
}

if (countArr.length == 1) {
  console.log(input[0]);
} else {
  let maxTotal = 0;
  let max = Math.max(...countArr);
  for (let i = 0; i < countArr.length; i++) {
    if (countArr[i] == max) {
      maxTotal++;
    }
  }
  if (maxTotal > 1) {
    console.log("?");
  } else {
    countArr = countArr.slice(0, countArr.indexOf(max) + 1);
    let sum = 0;
    for (let i = 0; i < countArr.length; i++) {
      sum += countArr[i];
    }
    console.log(input[sum - 1]);
  }
}