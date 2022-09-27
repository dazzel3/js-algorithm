function solution(a, b) {
    const answer = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']
    let day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let sum = 0
    for (let i=0; i<a-1; i++) {
        sum += day[i]
    }
    sum += b
    return answer[sum%7]
}