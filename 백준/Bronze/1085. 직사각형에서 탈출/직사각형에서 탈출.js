let fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const x = input[0];
const y = input[1];
const w = input[2];
const h = input[3];

console.log(Math.min(x, y, w - x, h - y));