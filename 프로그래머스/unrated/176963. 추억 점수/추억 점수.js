function solution(name, yearning, photo) {
    const info = {}, result = [];
    let sum = 0;
    
    for (let i=0; i<name.length; i++) {
        info[name[i]] = yearning[i];
    }
    
    for (row of photo) {
        for (r of row) {
            if (info[r]) sum += +info[r];
        }
        result.push(sum);
        sum = 0;
    }
    return result;
}