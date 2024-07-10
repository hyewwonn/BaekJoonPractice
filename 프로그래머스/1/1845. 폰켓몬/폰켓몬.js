function solution(nums) {
    var uniqueNums = new Set(nums);
    if(nums.length/2 > uniqueNums.size) return uniqueNums.size;
    else return nums.length/2;
}