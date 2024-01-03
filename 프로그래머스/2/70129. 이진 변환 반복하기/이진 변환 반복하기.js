function solution(s) {
    var answer = [0, 0];

    while (s !== '1') {
        if (s.includes('0')) {
            answer[1] += s.split('0').length - 1;
            s = s.replace(/0/g, '');
        }
        answer[0]++;
        s = s.length.toString(2);
    }

    return answer;
}
