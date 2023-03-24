function solution(nums) {
    const num = nums.length / 2;
    nums = nums.filter((v, i) => nums.indexOf(v) === i);
    
    return num > nums.length ? nums.length : num;
}