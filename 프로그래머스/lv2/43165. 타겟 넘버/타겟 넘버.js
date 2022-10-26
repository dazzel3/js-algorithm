function solution(numbers, target) {
    let answer = 0
    let sum = 0
    let idx = 0
    const dfs = (idx, sum) => {
        if (idx === numbers.length) {
            if (sum === target) answer += 1
            return
        } 
        dfs(idx+1, sum + numbers[idx])
        dfs(idx+1, sum - numbers[idx])
    }
    dfs(idx, sum)
    return answer
}