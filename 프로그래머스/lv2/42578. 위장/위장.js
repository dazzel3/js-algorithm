function solution(clothes) {
    const closet = {}
    
    for ([name, type] of clothes) {
        if (!closet[type]) closet[type] = []
        closet[type].push(name)
    }
    
    const clothesType = Object.keys(closet)
    if (clothesType.length === 1) return closet[clothesType].length
    
    const result = []
    for (key of clothesType) {
        result.push(closet[key].length + 1)
    }
    return result.reduce((acc, cur) => acc * cur, 1) - 1
}