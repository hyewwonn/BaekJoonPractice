function solution(n) {
    var answer = Array.from({ length: n }, () => Array(n).fill(0));
    var i = 0, j = 0;
    var direction = [[0,1], [1,0], [0,-1], [-1,0]];
    var directionId = 0;
    var num = 1;
    
    while (num <= n * n) {
        answer[i][j] = num;
        num++;
        
        var nextI = i + direction[directionId][0];
        var nextJ = j + direction[directionId][1];
        
        // 방향 전환
        if (nextI >= n || nextI < 0 || nextJ >= n || nextJ < 0 || answer[nextI][nextJ] !== 0) {
            directionId = (directionId + 1) % 4;
            nextI = i + direction[directionId][0];
            nextJ = j + direction[directionId][1];
        }
        
        i = nextI;
        j = nextJ;
    }
    return answer;
}
