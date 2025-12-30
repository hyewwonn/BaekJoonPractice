function solution(k, tangerine) {
    // 가장 많은 크기부터 담아야 종류 최소화 가능
    // 크기별 개수 count -> 정렬 -> 담기
    const count = {};
    
    for (const t of tangerine) {
        count[t] = (count[t] || 0) + 1;
    }

    const sorted = Object.values(count).sort((a, b) => b - a);

    let sum = 0;
    let types = 0;

    for (const c of sorted) {
        sum += c;
        types++;
        if (sum >= k) break;
    }

    return types;
}