function solution(number, limit, power) {
    const countList = []
    let count = 0, result = 0
    
    for (let i=1; i<=number; i++) {
        for (let j=1; j<=Math.sqrt(i); j++) {
            if (i % j === 0) {
                count += 1
                if (Number.isInteger(i/j) && i/j !== j) count += 1
            }
        }
        countList.push(count)
        count = 0
    }
    
    for (n of countList) {
        result += n > limit ? power : n
    }
    return result
}