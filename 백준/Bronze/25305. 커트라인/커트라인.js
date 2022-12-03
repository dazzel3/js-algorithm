let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = +input[0].split(' ')[1].trim();
const arr = input[1].split(' ').map((v) => +v.trim());
arr.sort((a, b) => b - a);

console.log(arr[num - 1]);