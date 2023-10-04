function solution(maps) {
    const n = maps.length - 1, m = maps[0].length - 1

    const queue = []
    queue.push([0, 0, 1]) // col, row, step

    while (queue.length) {
        const [col, row, step] = queue.shift()

        if (col < 0 || row < 0 || col > n || row > m) continue
        if (maps[col][row] === 0) continue

        if (col === n && row === m) return step
        
        maps[col][row] = 0
        queue.push([col + 1, row, step + 1])
        queue.push([col - 1, row, step + 1])
        queue.push([col, row + 1, step + 1])
        queue.push([col, row - 1, step + 1])
    }
    return -1
}