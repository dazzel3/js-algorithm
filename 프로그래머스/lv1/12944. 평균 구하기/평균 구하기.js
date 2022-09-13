function solution(arr) {
    var answer = arr.reduce((a,c) => (a+c))
    return answer / arr.length;
}