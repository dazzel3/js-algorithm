function solution(arr) {
    return arr.length === 1 ? [-1] : arr.filter(n => n !== Math.min(...arr))
}