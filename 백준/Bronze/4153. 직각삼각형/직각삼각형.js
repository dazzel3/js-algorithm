let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (value of input) {
  let arr = value.split(' ').map((v) => +v);

  if (arr[0] === 0) break;
  arr.sort((a, b) => a - b);

  if (arr[0] * arr[0] + arr[1] * arr[1] === arr[2] * arr[2]) {
    console.log('right');
  } else {
    console.log('wrong');
  }
}