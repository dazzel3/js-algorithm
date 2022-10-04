function solution(s) {
    s = (s.slice(1, -1) + ',').split("},").sort((a,b) => a.length - b.length)
    let result = []
    for (let i=1; i<s.length; i++) {
        let arr = s[i].slice(1).split(",")
        for (let i=0; i<arr.length; i++) {
            if (!result.includes(+arr[i])) result.push(+arr[i])
        }
    }
    return result
}