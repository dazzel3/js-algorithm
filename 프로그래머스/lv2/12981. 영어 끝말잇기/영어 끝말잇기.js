function solution(n, words) {
    for (let i=1; i<words.length; i++) {
        if (words.indexOf(words[i]) !== i || words[i][0] !== words[i-1].slice(-1)) {
            let number = (i+1)%n === 0 ? n : (i+1)%n
            return [number, Math.ceil((i+1)/n)]
        }
    }
    return [0,0]
}