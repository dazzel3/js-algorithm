let fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num = +input[0];
const arr = input[1].split(' ').map((v) => +v);

let count = 0;

const primeNum = (n) => {
  if (n < 2) return;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return;
  }
  count += 1;
};

for (let i = 0; i < num; i++) {
  primeNum(arr[i]);
}

console.log(count);
