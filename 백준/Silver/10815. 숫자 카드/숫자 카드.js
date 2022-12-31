let fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = [+input[0], +input[2]];

const [hasCards, cards] = [
  new Set(input[1].split(' ').map(Number)),
  input[3].split(' ').map(Number),
];

let result = '';

for (let i = 0; i < M; i++) {
  if (hasCards.has(cards[i])) result += 1 + ' ';
  else result += 0 + ' ';
}

console.log(result);