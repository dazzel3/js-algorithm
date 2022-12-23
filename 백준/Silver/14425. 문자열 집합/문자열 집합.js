let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map((v) => +v);

const groupS = new Set(input.slice(1, N + 1));
const groupC = input.splice(N + 1);

let result = 0;

for (c of groupC) {
  if (groupS.has(c)) result += 1;
}

console.log(result);
