function solution(s) {
    if(/^[0-9]*$/.test(s)) return parseInt(s);
    var answer = s;
    const alpha = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    alpha.forEach((al, i) => {
        const regex = new RegExp(al, 'g');
        answer = answer.replace(regex, i);
    })
    return parseInt(answer);
}