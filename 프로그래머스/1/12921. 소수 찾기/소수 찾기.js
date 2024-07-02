function solution(n) {
    var isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    // 에라토스테네스의 체
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    var answer = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            answer++;
        }
    }

    return answer;
}
