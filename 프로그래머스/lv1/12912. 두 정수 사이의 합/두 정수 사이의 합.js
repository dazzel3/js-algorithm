function solution(a, b) {
    let min = Math.min(a,b)
    let max = Math.max(a,b)
    let answer = 0
    for (let i = min; i<= max; i++) {
        answer += i
    }
    return a === b ? a : answer
}