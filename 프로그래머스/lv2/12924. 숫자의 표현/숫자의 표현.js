function solution(n) {
    let answer = 0
    let count = 1
    while (n>0) {
        if (n % count === 0) {
            answer++
        }
        n -= count
        count++
    }
    return answer
}