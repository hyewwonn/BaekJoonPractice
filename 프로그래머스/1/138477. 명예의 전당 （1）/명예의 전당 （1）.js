function solution(k, score) {
    var answer = [];
    for(let i = 0; i < score.length; i++) {
        let hall = score.slice(0, i+1).sort((a, b) => b-a).slice(0, k);
        if(i+1 < k) answer[i] = hall[i];
        else answer[i] = hall[k-1];
    }
    return answer;
}