function solution(n) {
    if (n<2) return 1
    let arr = [1,1,2,...Array(n-2).fill(0)]
    arr.forEach((_,i) => {
        if (i>2) arr[i] = (arr[i-2] + arr[i-1]) % 1234567
    })
    return arr[n]
}