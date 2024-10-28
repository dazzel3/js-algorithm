function solution(progresses, speeds) {
    const info = [], result = []
    
    for (let i = 0; i < progresses.length; i++) {
        info.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    while (info.length > 0) {
        const value = info.shift()
        
        let index = 0, count = 1
        while (value >= info[index]) {
            count += 1
            info.shift()
        }
        result.push(count)
    }
    return result
}