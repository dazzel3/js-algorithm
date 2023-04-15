function solution(num_list) {
    let even = 0, odd = 0;
    
    for (n of num_list) {
        n % 2 === 0 ? even += 1 : odd += 1;
    }
    return [even, odd];
}