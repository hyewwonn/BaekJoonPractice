function solution(n, words) {
    const used = new Set();

    for (let i = 0; i < words.length; i++) {
        const w = words[i];
        if (
            w.length < 2 ||
            used.has(w) ||
            (i && words[i - 1].at(-1) !== w[0])
        ) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        used.add(w);
    }
    return [0, 0];
}