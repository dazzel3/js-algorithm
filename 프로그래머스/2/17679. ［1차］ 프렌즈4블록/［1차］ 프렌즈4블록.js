function solution(m, n, board) {
    board = board.map(v => v.split(''))
    
    while (true) {
        const blockPosList = []
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (board[i][j] === 0) continue;
                if (findSameBlock(i, j)) blockPosList.push([i, j])
            }
        }
        if (blockPosList.length === 0) break
        
        for (const [x, y] of blockPosList) {
            board[x][y] = board[x][y+1] = board[x+1][y+1] = board[x+1][y] = 0
        }
        replacePos()
    }
    return board.flat().filter(v => v === 0).length
    
    function findSameBlock (x, y) {
        const currentBlock = board[x][y]
        return currentBlock === board[x][y+1] && currentBlock === board[x+1][y+1] && currentBlock === board[x+1][y]
    }
    
    function replacePos () {
        for (let i = m - 1; i >= 0; i--) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === 0) {
                    for (let k = i - 1; k >= 0; k--) {
                        if (board[k][j] !== 0) {
                            board[i][j] = board[k][j]
                            board[k][j] = 0
                            break;
                        }
                    }
                }
                
            }
        }
    }
}