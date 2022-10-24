function dfs(n, computers, visited, start) {
    const stack = [start]
    while (stack.length) {
        const curr = stack.pop()
        visited[curr] = true
        for (let i=0; i<n; i++) {
            if (!visited[i] && computers[curr][i]) stack.push(i)
        }
    }
}

function solution(n, computers) {
    let answer = 0
    const visited = new Array(n).fill(false)
    
    for (let i=0; i<n; i++) {
        if (!visited[i]) {
            dfs(n, computers, visited, i)
            answer++
        }
    }
    return answer
}