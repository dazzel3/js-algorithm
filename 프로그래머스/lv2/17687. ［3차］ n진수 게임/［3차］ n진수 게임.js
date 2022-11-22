function solution(n, t, m, p) {
    let result = [], queue = []
    let turn = 0, current = -1
    
    while (result.length < t) {
        if (queue.length === 0) {
            current += 1
            current.toString(n).split('').forEach(v => queue.push(v))
        }
        const char = queue.shift()
        if (turn % m === p - 1) {
            result.push(char)
        }
        turn += 1
    }
    return result.join('').toUpperCase()
}