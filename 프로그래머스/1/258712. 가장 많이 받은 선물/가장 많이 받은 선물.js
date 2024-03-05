function solution(friends, gifts) {
    const combi = getCombination(friends, 2)
    const info = {}, point = {}, result = {}
    
    for (const gift of gifts) {
        if (!info[gift]) info[gift] = 0
        info[gift] += 1
        const [giver, taker] = gift.split(' ')
        if (!point[giver]) point[giver] = 0
        if (!point[taker]) point[taker] = 0
        point[giver] += 1
        point[taker] -= 1
    }
    const keys = Object.keys(info)
    
    combi.forEach((c, i) => {
        const [first, second] = c
        const firstValue = info[`${first} ${second}`] || 0
        const secondValue = info[`${second} ${first}`] || 0
        
        if (firstValue === secondValue) {
            const firstPoint = point[first] || 0
            const secondPoint = point[second] || 0
            if (firstPoint === secondPoint) return
            if (firstPoint > secondPoint) {
                if (!result[first]) result[first] = 0
                result[first] += 1
            } else {
                if (!result[second]) result[second] = 0
                result[second] += 1
            }
            return
        }
        if (firstValue > secondValue) {
            if (!result[first]) result[first] = 0
            result[first] += 1
        } else {
            if (!result[second]) result[second] = 0
            result[second] += 1
        }
    })
    const answer = Object.values(result).sort((a,b) => b - a)
    return answer.length === 0 ? 0 : answer[0]
}

function getCombination(arr, num) {
    const results = []
    
    if (num === 1) return arr.map(v => [v])
    
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1)
        const combination = getCombination(rest, num - 1)
        const attached = combination.map(v => [fixed, ...v])
        
        results.push(...attached)
    })
    return results
}