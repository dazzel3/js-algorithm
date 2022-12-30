let fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const NSet = new Set(input.slice(1, N + 1));
const MSet = new Set(input.slice(N + 1));

const result = [];

MSet.forEach((v) => {
  if (NSet.has(v)) result.push(v);
});

result.sort();

console.log(result.length);
console.log(result.join('\n'));
