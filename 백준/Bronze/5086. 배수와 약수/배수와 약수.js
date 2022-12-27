let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let i = 0;
while (true) {
  const arr = input[i].split(' ').map(Number);

  if (arr[0] === 0 && arr[1] === 0) break;

  if (arr[0] > arr[1] && arr[0] % arr[1] === 0) console.log('multiple');
  else if (arr[0] < arr[1] && arr[1] % arr[0] === 0) console.log('factor');
  else console.log('neither');

  i += 1;
}