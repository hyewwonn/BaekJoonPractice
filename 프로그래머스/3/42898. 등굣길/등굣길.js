function solution(m, n, puddles) {
    const MOD_CONST = 1000000007;

    const grid = Array.from({ length: n }, () => Array(m).fill(0));
    grid[0][0] = 1;

    puddles.forEach(([x, y]) => grid[y - 1][x - 1] = -1);

    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            if (grid[y][x] !== -1) {
                let pathsFromLeft = (x > 0 && grid[y][x - 1] !== -1) ? grid[y][x - 1] : 0;
                let pathsFromTop = (y > 0 && grid[y - 1][x] !== -1) ? grid[y - 1][x] : 0;

                grid[y][x] = (grid[y][x] + pathsFromLeft + pathsFromTop) % MOD_CONST;
            }
        }
    }

    return grid[n - 1][m - 1] % MOD_CONST;
}
