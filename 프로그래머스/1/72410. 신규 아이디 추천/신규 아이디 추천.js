function solution(new_id) {
    var answer = new_id;
    answer = answer.toLowerCase() // 1
        .replace(/[^a-z0-9-_.]/g, '') // 2
        .replace(/\.{2,}/g, '.') // 3
        .replace(/^\.|\.$/g, ''); // 4
    if (answer === '') { // 5
        answer = 'a';
    }
    if (answer.length >= 16) { // 6
        answer = answer.slice(0, 15).replace(/\.$/, '');
    }
    answer = answer.padEnd(3, answer[answer.length-1]); // 7
    return answer;
}