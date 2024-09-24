function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    let dynamic = new Array(n + 1).fill(0);
    dynamic[1] = 1;
    dynamic[2] = 2;

    for (let i = 3; i <= n; i++) {
        // n번째 칸에 도달하는 방법의 수 = n-1번째 칸에 도달하는 방법의 수 + n-2번째 칸에 도달하는 방법의 수
        dynamic[i] = (dynamic[i - 1] + dynamic[i - 2]) % 1234567;
    }

    return dynamic[n];
}