function solution(s, n) {
    var answer = '';
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ') {
            answer+= ' ';
            continue;
        }
        let code = s.charCodeAt(i);
        let result = code + n;
        console.log(code, result);
        if(code >= 65 && code <= 90) {
            if(result > 90) result -= 26;
        }
        if(code >= 97 && code <= 122) {
            if(result > 122) result -= 26;
        }
        answer += String.fromCharCode(result);
    }
    return answer;
}