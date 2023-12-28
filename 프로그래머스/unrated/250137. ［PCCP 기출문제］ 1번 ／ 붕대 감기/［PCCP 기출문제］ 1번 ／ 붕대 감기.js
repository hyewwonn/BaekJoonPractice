function solution(bandage, health, attacks) {
    var answer = health;
    var t = 0;
    var atk = 0;
    for(let i = 0; i<= attacks[attacks.length - 1][0]; i++){
        if(answer <= 0) {
            break;
        }
        if(answer < health && attacks[atk][0] !== i) {
            answer = answer+bandage[1] <= health ? answer + bandage[1] : health;        
            t++;
            if(t === bandage[0] && answer < health) {
                answer = answer+bandage[2] <= health ? answer + bandage[2] : health;      
                t = 0;
            }
        }
        if(attacks[atk][0] === i) {
            answer -= attacks[atk][1];
            t = 0;
            atk++;
        }
        console.log(i, answer, t);
    }
    return answer <= 0 ? -1 : answer;
}