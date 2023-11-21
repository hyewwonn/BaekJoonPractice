function solution(numbers) {
    var answer = 0;
    var nums = [0,1,2,3,4,5,6,7,8,9];
    nums = nums.filter(num => !numbers.includes(num));
    nums.forEach(num => answer += num);
    return answer;
}