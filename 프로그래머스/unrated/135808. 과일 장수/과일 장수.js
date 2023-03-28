function solution(k, m, score) {
    const box = [];
    let count = 0, answer = 0;
    
    score.sort((a, b) => b - a);
    
    for (apple of score) {
        count += 1;
        if (count === m) {
            answer += apple * m;
            count = 0;
        }
    }
    return answer;  
}