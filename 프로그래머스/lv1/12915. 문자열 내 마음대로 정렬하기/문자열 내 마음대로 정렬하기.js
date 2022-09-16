function solution(strings, n) {
    let obj = strings.map(val => [val[n],val]).sort()
    let answer = []
    for (let i=0; i<obj.length; i++) {
        answer.push(obj[i][1])
    }
    return answer
}