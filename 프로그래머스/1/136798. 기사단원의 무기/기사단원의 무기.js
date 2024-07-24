function solution(number, limit, power) {
    var answer = 0;
    
    for(let i = 1; i<=number; i++) {
        let count = divisor(i);
        answer += (count > limit ? power : count);
    }
    divisor(100);
    
    return answer;
}

function divisor(n) {
    let result = [];
    
    for(let i = 1; i<=Math.sqrt(n); i++) {
        if (n % i === 0) {
            result.push(i);
            if (n / i !== i) result.push(n / i);
        }
    }
    return result.length;
}