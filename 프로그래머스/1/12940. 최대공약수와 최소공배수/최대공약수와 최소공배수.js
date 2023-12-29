function solution(n, m) {
    var answer = [];
    
    // 최대공약수(유클리드 호제법)
    function gcd(a, b) {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // 최소공배수
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    const greatestCommonDivisor = gcd(n, m);
    const leastCommonMultiple = lcm(n, m);

    return [greatestCommonDivisor, leastCommonMultiple];
    
    return answer;
}