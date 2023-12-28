function solution(n, s, a, b, fares) {
const INF = Number.MAX_SAFE_INTEGER;
    
    const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(INF));
    for (const [start, end, cost] of fares) {
        graph[start][end] = cost;
        graph[end][start] = cost;
    }

    for (let i = 1; i <= n; i++) {
        graph[i][i] = 0;
    }

    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
            }
        }
    }

    let answer = INF;

    for (let i = 1; i <= n; i++) {
        answer = Math.min(answer, graph[s][i] + graph[i][a] + graph[i][b]);
    }

    return answer;
}