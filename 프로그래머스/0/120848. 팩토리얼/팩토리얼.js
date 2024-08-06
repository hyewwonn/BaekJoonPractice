function solution(n) {
    var i = 0;
    for(i = 1; i<=n; i++) {
        if(factorial(i) == n) return i;
        if(factorial(i) >= n) return i-1;
    }
}

function factorial(num) {
    var answer = 1;
    for(let i = 1; i<=num; i++) {
        answer *= i;
    }
    return answer;
}