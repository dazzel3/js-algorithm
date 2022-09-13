function solution(num) {
    let result = num
    let count = 0;
    if (result === 1) return 0
    while (true) {
        result = result % 2 === 0 ? result/2 : result*3 + 1
        count++
        if (count > 500) return -1
        if (result === 1) return count
    }
}