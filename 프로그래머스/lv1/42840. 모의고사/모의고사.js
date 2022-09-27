function solution(answers) {
    let str = answers.join("")
    let first = '12345'.repeat(Math.ceil(str.length/5)).substring(0, str.length)
    let second = '21232425'.repeat(Math.ceil(str.length/8)).substring(0, str.length)
    let third = '3311224455'.repeat(Math.ceil(str.length/10)).substring(0, str.length)
    let a = 0, b = 0, c = 0
    for (let i=0; i<answers.length; i++) {
        if (+answers[i] === +first[i]) a++
        if (+answers[i] === +second[i]) b++
        if (+answers[i] === +third[i]) c++
    }
    let result = {1:a, 2:b, 3:c}
    let maxValue = Math.max(...Object.values(result))
    return Object.keys(result).filter(key => result[key] === maxValue).map(n=>+n)
}