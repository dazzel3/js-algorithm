function solution(x) {
    let n = x.toString().split("").map(n => +n).reduce((a,b) => a+b)
    return x % n === 0
}