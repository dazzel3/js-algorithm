let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("");
let info = {
  "=": ["c", "s", "z"],
  "-": ["c", "d"],
  j: ["l", "n"],
};
let length = input.length;
for (let i = 0; i < input.length; i++) {
  if (Object.keys(info).includes(input[i])) {
    if (info[input[i]].includes(input[i - 1])) {
      length--;
      if (input[i - 1] == "z") {
        if (input[i - 2] == "d") {
          length--;
        }
      }
    }
  }
}
console.log(length);