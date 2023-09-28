function solution(k, tangerine) {
    const countInfo = {}
    tangerine.forEach((v) => {
        if (!countInfo[v]) countInfo[v] = 1
        else countInfo[v] += 1
    })
    const countList = Object.entries(countInfo).sort((a, b) => b[1] - a[1]).map((v) => v[1])
    
    let result = 0, i = 0;
    while (k > 0) {
        k -= countList[i]
        result += 1
        i += 1
    }
    return result
}