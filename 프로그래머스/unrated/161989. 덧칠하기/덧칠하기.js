function solution(n, m, section) {
    if (m === 1) return section.length;
    
    let result = 0, paint = section[0] - 1;
    
    for (const element of section) {
        if (paint < element) {
            paint = element + m - 1;
            result += 1;
        }
    }
    return result;
}