function solution(cipher, code) {
    var answer = [...cipher].filter((val, i) => (i+1)%code == 0);
    return answer.join('');
}