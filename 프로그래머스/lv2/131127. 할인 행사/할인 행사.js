function solution(want, number, discount) {
    let result = 0
    
    for (let i = 0; i <= discount.length - 10; i++) {
        let count = 0
        let list = discount.slice(i, i + 10)
        for (let j = 0; j < want.length; j++) {
            if (!list.includes(want[j])) break
            if (list.filter((v) => v === want[j]).length === number[j]) count += 1
        }
        if (count === number.length) result += 1
    }
    return result
}