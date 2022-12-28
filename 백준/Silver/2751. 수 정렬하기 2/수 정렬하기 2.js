let input = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    const [n, ...numbers] = input.map(Number);
    const result = numbers.sort((a, b) => a - b);
    console.log(result.join('\n'));
  });