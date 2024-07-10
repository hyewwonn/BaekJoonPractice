function solution(nums) {
    var uniqueNums = [...new Set(nums)];
    if(nums.length/2 > uniqueNums.length) return uniqueNums.length;
    else return nums.length/2;
}