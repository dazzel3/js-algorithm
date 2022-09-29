function solution(brown, yellow) {
    let a = 1
    let b = -((brown-4)/2)
    let c = yellow
    let x1 = (-b + Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a)
    let x2 = (-b - Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a)
    return [x1+2, x2+2]
}