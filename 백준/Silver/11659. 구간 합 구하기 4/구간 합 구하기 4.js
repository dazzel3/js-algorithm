let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const numArr = input[1].split(' ').map(Number);
const indexArr = input.slice(2);

const sumArr = [0, numArr[0]];

for (let i = 1; i < N; i++) {
  sumArr.push(numArr[i] + sumArr[i]);
}

const answer = [];

for (let i = 0; i < M; i++) {
  const index = indexArr[i].split(' ').map(Number);
  answer.push(sumArr[index[1]] - sumArr[index[0] - 1]);
}

console.log(answer.join('\n'));