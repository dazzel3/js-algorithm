function solution(n) {
    var x = 1
    while(true) {
        if (n%x === 1) return x
        x++
    }
}