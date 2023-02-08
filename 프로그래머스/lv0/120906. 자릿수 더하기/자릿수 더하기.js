function solution(n) {
    const arr = n.toString().split("").map(v => Number(v));
    let sum = 0;
    
    for (v of arr) {
        sum += v;
    }
    return sum;
}