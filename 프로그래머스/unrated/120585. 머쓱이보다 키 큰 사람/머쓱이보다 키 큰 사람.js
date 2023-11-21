function solution(array, height) {
    var answer = 0;
    array.map((h)=>{if(h>height) answer++})
    return answer;
}