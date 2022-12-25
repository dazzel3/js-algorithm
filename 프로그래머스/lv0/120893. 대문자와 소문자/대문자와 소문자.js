function solution(my_string) {
    let result = ''
    
    for (str of my_string) {
        if (str === str.toUpperCase()) {
            result += str.toLowerCase()
        } else {
            result += str.toUpperCase()
        }
    }
    return result
}