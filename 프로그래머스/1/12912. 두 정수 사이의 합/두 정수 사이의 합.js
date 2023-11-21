function solution(a, b) {
    var max = Math.max(a, b);
    var min = Math.min(a,b);
    var answer = 0;
    for(let i = min; i<=max; i++) {
        if (min === max) return min;
        answer += i;
    }
        return answer;
}