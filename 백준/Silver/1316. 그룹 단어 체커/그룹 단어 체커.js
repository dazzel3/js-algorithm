let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const num = +input[0];
let answer = +input[0];
for (let i = 1; i <= num; i++) {
  let word = input[i].trim().split("");
  let wordCopy = [...word];
  for (let i = 0; i < word.length; i++) {
    wordCopy.shift();
    if (word[i] != word[i + 1]) {
      if (wordCopy.includes(word[i])) {
        answer--;
        break;
      }
    }
  }
}
console.log(answer);
