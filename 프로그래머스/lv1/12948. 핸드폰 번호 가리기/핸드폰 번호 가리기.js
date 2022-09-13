function solution(phone_number) {
    let str = phone_number.slice(0,-4).split("").map(n => '*').join("")
    return str + phone_number.slice(-4)
}