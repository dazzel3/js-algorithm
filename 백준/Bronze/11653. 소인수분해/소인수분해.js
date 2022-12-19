const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

function getPrimeFactor(n) {
  let divider = 2;
  while (n != 1) {
    if (n % divider === 0) {
      console.log(divider);
      n /= divider;
    } else {
      divider++;
    }
  }
}

rl.on('line', function (line) {
    input = line.split(' ');

    getPrimeFactor(input[0]);
  })
  .on('close', function () {
    process.exit();
});