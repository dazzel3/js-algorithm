function solution(msg) {
    const dict = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const result = []
    let i = 0, s = msg[0]
    
    while (i !== msg.length) {
        if (dict.includes(s)) {
            if (i !== msg.length-1) i += 1
            else {
                result.push(dict.indexOf(s)+1)
                break
            }
            s += msg[i]
        } else {
            dict.push(s)
            result.push(dict.indexOf(s.slice(0, -1))+1)
            s = msg[i]
        }
    }
    return result
}