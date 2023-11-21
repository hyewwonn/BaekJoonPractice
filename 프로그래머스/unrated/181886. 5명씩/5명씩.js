function solution(names) {
    var answer = [];
    for(let i = 5; i<names.length+5; i+=5) {
        answer.push(names[i-5]);
    }
    return answer;
}