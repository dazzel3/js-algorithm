function solution(s) {
    let count = 0, zero = 0
    while (s !== '1') {
        let arr = s.split("").filter((v) => v === '1')
        zero += (s.length - arr.length)
        s = arr.length.toString(2)
        count++
    }
    return [count, zero]
}