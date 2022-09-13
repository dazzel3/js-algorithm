function solution(n) {
    var answer = n.toString().split("").map(n => +n).reverse()
    return answer
}