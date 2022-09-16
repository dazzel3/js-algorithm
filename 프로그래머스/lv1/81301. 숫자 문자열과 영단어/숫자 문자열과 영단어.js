function solution(s) {
    const info = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let cur = ''
    let result = s.split("").map((v) => {
        if (!isNaN(v)) return v
        else {
            cur += v
            if (info.includes(cur)) {
                let idx = info.indexOf(cur)
                cur = ''
                return idx
            }
        }
    })
    return +result.join("")
}