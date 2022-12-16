function solution(s) {
    let xCount = 1, notXCount = 0, index = 0
    let result = 0, x = s[0]
    
    for (let i=1; i<s.length; i++) {
        if (x !== s[i]) {
            notXCount += 1
            console.log(x, s[i])
            if (xCount === notXCount) {
                index += xCount + notXCount
                x = s[index]
                xCount = 0
                notXCount = 0
                result += 1
            }
        } else {
            xCount += 1
        }  
    }
    return index === s.length ? result : result + 1
}