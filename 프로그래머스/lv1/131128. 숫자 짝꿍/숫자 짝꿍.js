function solution(X, Y) {
    const numCount = {}
    const sameNum = []
    
    for (num of X) {
        numCount[num] = (numCount[num] || 0) + 1
    }
    
    for (num of Y) {
        if (numCount[num]) {
            sameNum.push(num)
            numCount[num] -= 1
        }
    }
    
    let answer = sameNum.length ? sameNum.sort((a,b) => b-a).join('') : '-1'
    if (Number(answer) === 0) answer = '0'
    
    return answer
}