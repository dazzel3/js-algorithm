function solution(edges) {
    const info = {}
    
    for (const [x, y] of edges) {
        if (!info[x]) info[x] = [0, 0]
        if (!info[y]) info[y] = [0, 0]
        info[x][0] += 1
        info[y][1] += 1
    }
    let dount = 0, line = 0, cross = 0, root = 0, node = 0;
    
    for (let i in info) {
        const [outCount, inCount] = info[i]
        if (outCount === 0) {
            line += 1
            continue;
        }
        if (outCount >= 2) {
            if (outCount === 2 && inCount > 0) {
                cross += 1
            } else if (!root) {
                root = outCount
                node = Number(i)
            }
        }
    }
    dount = root - line - cross
    return [node, dount, line, cross]
}