function solution(k, m, score) {
    score.sort((a,b) => b-a)
//     const rest = score.length % m
    
//     if (rest) score.splice(-rest)
    
    const box = []
    let count = 0, answer = 0
    
    for (apple of score) {
        count += 1
        
        if (count === m) {
            answer += apple * m
            count = 0
        }
    }
    return answer
    
}