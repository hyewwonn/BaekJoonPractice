function solution(s) {
    var answer = [];
    for(let i = 0; i<s.length; i++) {
        let lastIdx = i === 0 ? -1 : s.lastIndexOf(s[i], i-1);
        answer[i] = lastIdx !== -1 ? i - lastIdx : lastIdx;
    }

    return answer;
}