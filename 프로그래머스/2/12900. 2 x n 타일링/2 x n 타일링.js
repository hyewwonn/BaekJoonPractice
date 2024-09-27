function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    let dynamic = new Array(n + 1).fill(0);
    dynamic[1] = 1;
    dynamic[2] = 2;
    for (let i = 3; i <= n; i++) {
        dynamic[i] = (dynamic[i - 1] + dynamic[i - 2]) % 1000000007;
    }
    return dynamic[n];
}