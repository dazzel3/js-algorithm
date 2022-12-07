function solution(food) {
    let result = ''
    food = food.slice(1).map(v => Math.floor(v/2))
    
    for (let i=0; i<food.length; i++) {
        for (let j=0; j<food[i]; j++) {
            result += i+1
        }
    }
    
    return result + '0' + result.split('').reverse().join('')
}