function solution(s) {
    if (s.length === 4 || s.length === 6) return !/[a-zA-Z]/.test(s)
    else return false
}