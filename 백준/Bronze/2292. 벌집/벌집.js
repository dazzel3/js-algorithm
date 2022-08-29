let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let num = Number(input[0]);

let count = 1;
let sum = 1 ;
while (sum < num) {
    sum += 6 * count ;
    count++;
}


console.log(count);