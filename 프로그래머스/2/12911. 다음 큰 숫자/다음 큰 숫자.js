function solution(n) {
    var i, j;
    for (i = 0; !(n & 1); i++) {n = n >> 1; }
    for (j = 0; n & 1; i++, j++) {n = n >> 1; }
    for (j--, n++; i !== j; i--) {n = n << 1; }
    for (i; i; i--, n++) {n = n << 1; }
    return n;
}