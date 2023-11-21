function solution(x) {
    var sum = 0;
    (x+"").split("").forEach(n=>sum +=n*1);
    return x % sum === 0;
}