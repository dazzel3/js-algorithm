function solution(number) {
    const makeCombination = (arr, num) => {
        let result = []
        if (num === 1) return arr.map(v => [v])
        
        arr.forEach((fixed, index, origin) => {
            const rest = arr.slice(index + 1)
            const combi = makeCombination(rest, num - 1)
            const attached = combi.map(v => [fixed, ...v])
            result.push(...attached)
        })
        return result
    }
    
    const isEqualSum = (arr, sum) => {
        const current = arr.reduce((acc, cur) => acc + cur, 0)
        return current === sum
    }
    
    const combi = makeCombination(number, 3)
    
    return combi.filter(v => isEqualSum(v, 0)).length
}