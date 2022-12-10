function solution(a, b, n) {
    let result = 0
    
    while (n >= a) {
        const getNum = Math.floor(n / a) * b
        n = n % a + getNum
        result += getNum
    }
    return result
}