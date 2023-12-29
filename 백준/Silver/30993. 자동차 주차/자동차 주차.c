#include <stdio.h>

int countParkingWays(int N, int A, int B, int C) {
    if (N == 0) {
        return 1;
    }
    int ways = 0;
    if (A > 0) {
        ways += countParkingWays(N - 1, A - 1, B, C);
    }
    if (B > 0) {
        ways += countParkingWays(N - 1, A, B - 1, C);
    }
    if (C > 0) {
        ways += countParkingWays(N - 1, A, B, C - 1);
    }

    return ways;
}

int main(void) {
    int N, A, B, C;

    scanf("%d %d %d %d", &N, &A, &B, &C);

    printf("%d\n", countParkingWays(N, A, B, C));

    return 0;
}