function solution(d, budget) {
    var answer = 0;
    d.sort((a, b) => a - b);
    d.map((val) => {
        if(val<=budget) {
            budget -= val;
            answer++;
        }
    });
    return answer;
}