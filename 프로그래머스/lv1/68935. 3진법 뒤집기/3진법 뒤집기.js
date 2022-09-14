function solution(n) {
    let arr = []
    let num = 1
    let answer = 0
    while (n > 0) {
        arr.push(n % 3)
        n = Math.floor(n / 3)
    }
    for (let i=arr.length-1; i>=0; i--) {
        answer += num * arr[i]
        num *= 3
    }
    return answer
}