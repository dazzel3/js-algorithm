function solution(k, score) {
    const result = []
    const currentState = []
    
    for (let i=0; i<score.length; i++) {
        if (i < k) {
            currentState.push(score[i])
            currentState.sort((a, b) => a-b)
            result.push(currentState[0])
        } else {
            if (score[i] > currentState[0]) {
                currentState.shift()
                currentState.push(score[i])
                currentState.sort((a,b) => a-b)
            }
            result.push(currentState[0])
        }
    }
    return result
}