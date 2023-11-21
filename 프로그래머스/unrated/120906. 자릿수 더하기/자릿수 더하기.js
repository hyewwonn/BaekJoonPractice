function solution(n) {
    var answer = 0;
    arr = [...(n.toString())];
    arr.filter((str)=>{answer += parseInt(str)});
    return answer;
}