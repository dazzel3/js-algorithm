let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.trim());

const arr = input.slice(1);

const stack = [];
const result = [];

for (item of arr) {
  const sp = item.split(' ');
  switch (sp[0]) {
    case 'push':
      stack.push(+sp[1]);
      break;
    case 'top':
      result.push(stack.length ? stack[stack.length - 1] : -1);
      break;
    case 'pop':
      result.push(stack.length ? stack[stack.length - 1] : -1);
      stack.pop();
      break;
    case 'size':
      result.push(stack.length);
      break;
    case 'empty':
      result.push(stack.length ? 0 : 1);
    default:
      break;
  }
}

console.log(result.join('\n'));
