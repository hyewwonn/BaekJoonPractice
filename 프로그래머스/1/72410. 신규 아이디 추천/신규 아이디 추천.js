function solution(new_id) {
    var answer = new_id;
    answer = answer.toLowerCase();
    answer = answer.replace(/[^a-z0-9-_.]/g, '');
    answer = answer.replace(/\.{2,}/g, '.').replace(/^\.|\.$/g, '');
    if (answer === '') {
        answer = 'a';
    }
    if (answer.length >= 16) {
        answer = answer.slice(0, 15).replace(/\.$/, '');
    }
    answer = answer.padEnd(3, answer[answer.length-1]);
    return answer;
}