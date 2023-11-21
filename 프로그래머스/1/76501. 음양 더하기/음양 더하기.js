function solution(absolutes, signs) {
    var answer = 0;
    absolutes.forEach((num, i) => signs[i] ? answer += num : answer -= num );
    return answer;
}