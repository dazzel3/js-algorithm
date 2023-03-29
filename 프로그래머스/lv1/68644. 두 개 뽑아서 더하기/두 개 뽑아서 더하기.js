const getCombi = (arr, num) => {
    const results = [];
    
    if (num === 1) return arr.map((v) => [v]);
    
    arr.forEach((fixed, idx, origin) => {
        const rest = origin.slice(idx+1);
        const combi = getCombi(rest, num-1);
        const attached = combi.map((v) => +fixed + +v);
        results.push(...attached);
    })
    return results.filter((v, idx) => results.indexOf(v) === idx).sort((a,b) => a-b);
}

function solution(numbers) {
    return getCombi(numbers, 2);
}