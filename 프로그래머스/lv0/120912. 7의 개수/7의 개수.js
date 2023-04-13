function solution(array) {
    let result = 0;
    
    for (a of array) {
        a = a.toString().split('');
        for (value of a) {
            if (value === '7') result += 1;
        }
    }
    return result;
}