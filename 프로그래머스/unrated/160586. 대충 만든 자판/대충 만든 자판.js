function solution(keymap, targets) {
    const info = {}, result = []
    let index = 0
    
    keymap.forEach((v) => {
        v.split('').forEach((v, i) => {
            if (!info[v]) info[v] = i+1
            else if (info[v] > i+1) info[v] = i+1
        })
    })
    
    targets.forEach((v) => {
        v.split('').forEach((v) => {
            if (!info[v]) {
                index = -1
                return
            }
            if (index !== -1) index += info[v]
        })
        result.push(index)
        index = 0
    })
    return result
}