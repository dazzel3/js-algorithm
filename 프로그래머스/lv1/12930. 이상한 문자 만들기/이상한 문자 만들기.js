function solution(s) {
   let arr = s.toLowerCase().split(" ")
   for (let i=0; i<arr.length; i++) {
       let word = arr[i].split("")
       for (let j=0; j<word.length; j++) {
           if (j%2 === 0) word[j] = word[j].toUpperCase()
       }
       arr[i] = word.join("")
   }
    return arr.join(" ")
}