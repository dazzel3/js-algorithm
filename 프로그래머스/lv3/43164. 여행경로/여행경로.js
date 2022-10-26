function solution(tickets) {
    const graph = {}
    for ([src, dest] of tickets) {
        if (!graph[src]) graph[src] = []
        graph[src].push(dest)
    }
    for (const key in graph) {
        graph[key].sort((a, b) => a > b ? -1 : 1)
    }
    
    const stack = ['ICN']
    const result = []
    while (stack.length) {
        const src = stack[stack.length-1]
        if (graph[src] && graph[src].length > 0) {
            stack.push(graph[src].pop())
        } else {
            result.push(stack.pop())
        }
    }
    return result.reverse()
}