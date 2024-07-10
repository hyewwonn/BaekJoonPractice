function solution(t, p) {
    var answer = 0;
    for (let i = 0; i < t.length; i++) {
        if(i <= t.length-p.length) {
            if(t.slice(i, i+p.length) <= p) answer++;
        }
    }
    return answer;
}