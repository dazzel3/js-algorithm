let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map((n) => +n)
const arr = [1,1,2,2,2,8]
for (let i=0; i<arr.length; i++) {
    input[i] = arr[i] - input[i]
}
console.log(input.join(' '))