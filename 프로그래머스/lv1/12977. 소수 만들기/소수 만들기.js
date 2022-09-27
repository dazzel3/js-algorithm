function solution(nums) {
    const cases = combination(nums, 3)
    let result = 0
    for (let i=0; i<cases.length; i++) {
        let n = cases[i].reduce((a,v) => a+v)
        let count = 0
        for (let j=0; j<=n; j++) {
            if (n%j === 0) count++
        }
        if (count === 2) result++
    }
    return result
    
    function combination(arr, num) {
        const result = []
        if (num === 1) return arr.map(v => [v])
        arr.forEach((fixed, index, origin) => {
            let rest = origin.slice(index+1)
            const combi = combination(rest, num-1)
            const attached = combi.map((v) => [fixed, ...v])
            result.push(...attached)
        })
        return result
    }
}