function solution(citations) {
    citations = citations.sort((a,b) => b - a)
    for (let i = citations.length; i >= 0; i--) {
        let arr = citations.slice(0,i)
        let rest = citations.slice(i)
        if (i === arr.filter((v) => v >= i).length && rest.length === rest.filter((v) => v <= i).length) return i
    }
}