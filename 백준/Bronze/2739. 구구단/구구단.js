let fs = require('fs')
let input = +fs.readFileSync('/dev/stdin').toString()
for (let i=0; i<9; i++) {
    console.log(`${input} * ${i+1} = ${input * (i+1)}`)
}