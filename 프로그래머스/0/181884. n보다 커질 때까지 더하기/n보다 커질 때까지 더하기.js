function solution(numbers, n) {
    var answer = 0;
    numbers.forEach((val) => {
        if(answer > n) return answer;
        answer += val;
    })
    return answer;
}