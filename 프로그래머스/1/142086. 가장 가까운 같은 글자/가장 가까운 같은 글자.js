function solution(s) {
    var answer = [];
    for(let i = 0; i<s.length; i++) {
        let lastIdx = s.slice(0, i).lastIndexOf(s[i]);
        answer[i] = lastIdx !== -1 ? i - lastIdx : lastIdx;
    }

    return answer;
}