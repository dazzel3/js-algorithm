function solution(string, letter) {
    return string.split('').filter((v) => v !== letter).join('');
}