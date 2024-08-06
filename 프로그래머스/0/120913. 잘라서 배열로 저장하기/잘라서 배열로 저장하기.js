function solution(my_str, n) {
    var answer = [];
    var str = my_str;
    for(let i = 0; i<my_str.length; i+=n) {
        answer.push(str.slice(0,n));
        str = str.slice(n);
    }
    return answer;
}