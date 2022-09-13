function solution(x, n) {
    let answer = [x]
    for (let i=2; i<=n; i++) {
        answer.push(x*i)
    }
    return answer
}