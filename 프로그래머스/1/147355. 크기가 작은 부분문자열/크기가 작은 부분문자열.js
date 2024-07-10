function solution(t, p) {
    var answer = 0;
    [...t].map((letter, i) => {
        if(i <= t.length-p.length) {
            if(t.slice(i, i+p.length) <= p) answer++;
        }
    })
    return answer;
}