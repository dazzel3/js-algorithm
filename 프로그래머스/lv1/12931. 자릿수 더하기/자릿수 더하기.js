function solution(n)
{
    var arr = n.toString().split('').map(n=>+n)
    var answer = 0
    for (let i=0; i<arr.length; i++) {
        answer += arr[i]
    }
    return answer
}