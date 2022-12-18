function solution(ingredient) {
    let result = 0
    const stack = []
    
    for (let i=0; i<ingredient.length; i++) {
        stack.push(ingredient[i])
        
        if (stack.length >= 4 
            && stack[stack.length - 4] === 1
            && stack[stack.length - 3] === 2
            && stack[stack.length - 2] === 3
            && stack[stack.length - 1] === 1) {
            for (let n=0; n<4; n++) {
                stack.pop()
            }
            result += 1
        }
    }
    return result
}