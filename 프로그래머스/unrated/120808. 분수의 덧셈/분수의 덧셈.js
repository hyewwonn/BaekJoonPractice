function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    var numer = denom1*numer2 + denom2*numer1;
    var denom = denom1 * denom2;
    var min = Math.min(numer, denom);
    for(let i = min; i >=0; i--) {
        if(numer%i == 0 && denom%i == 0) {
            numer = numer/i;
            denom = denom/i;
            break;
        }
    }
    answer[0] = numer;
    answer[1] = denom;
    return answer;
}