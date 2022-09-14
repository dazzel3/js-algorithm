function solution(n, arr1, arr2) {
    let answer = []
    for (let i=0; i<n; i++) {
        answer.push((arr1[i] | arr2[i]).toString(2))
        if (answer[i].length !== n) {
            answer[i] = '0'.repeat(n-answer[i].length) + answer[i]
        }
        let code = answer[i].split("").map((v) => (v === '1' ? '#' : ' ')).join("")
        answer[i] = code
    }
    return answer
}