function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b) => b-a);
    
    for (let i = 0; i < score.length; i += m) {
        if (i + m > score.length) break;
        const box = score.slice(i, i + m);
        const minScore = box[box.length - 1];
        answer += minScore * m;
    }
    return answer;
}