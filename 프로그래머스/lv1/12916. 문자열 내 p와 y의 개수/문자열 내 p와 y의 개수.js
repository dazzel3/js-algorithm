function solution(s){
    let arr = s.toLowerCase().split("")
    let pNum = 0, yNum = 0
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === 'p') {
            pNum++
        } else if (arr[i] === 'y') {
            yNum++
        }
    }
    if (pNum === yNum) return true
    else return false
}