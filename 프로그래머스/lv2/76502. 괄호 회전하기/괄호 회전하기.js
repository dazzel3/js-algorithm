function solution(s) {
    let result = 0
    let arr = s.split("")
    const pair = {']': '[', ')': '(', '}': '{'}
    const isPair = (arr) => {
        let stack = []
        for (let i=0; i<arr.length; i++) {
            let el = arr[i]
            if (pair[el] === undefined) stack.push(el)
            else {
                if (stack[stack.length-1] !== pair[el]) return false
                stack.pop()
            }
        }
        if (stack.length) return false
        return true
    }
    
    for (let i=0; i<s.length; i++) {
        if (isPair(arr)) result++
        arr.push(arr.shift())
    }
    return result
}