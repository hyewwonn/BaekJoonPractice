function solution(lottos, win_nums) {
    var answer = [];
    var zeroCnt = 0;
    var cnt = 0;
    
    for(num of lottos) {
        if(num === 0) zeroCnt++;
        else if(win_nums.includes(num)) cnt++;
    }
    
    var maxRank = 7 - (cnt + zeroCnt);
    var minRank = 7 - cnt;
    
    if (maxRank > 6) maxRank = 6;
    if (minRank > 6) minRank = 6;

    answer = [maxRank, minRank];
    
    return answer;
}