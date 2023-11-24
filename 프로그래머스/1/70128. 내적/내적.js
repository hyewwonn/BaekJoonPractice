function solution(a, b) {
    var answer = 0;
    a.forEach((num, i) => {
        answer += num*b[i];
    })
    return answer;
}