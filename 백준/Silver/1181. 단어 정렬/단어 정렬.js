let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.trim())
  .slice(1);

input = input
  .filter((v, i) => input.indexOf(v) === i)
  .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
  .sort((a, b) => a.length - b.length)
  .forEach((v) => console.log(v));
