#include <stdio.h>

int main(void) {
    int m, n = 0;
    scanf("%d %d", &m, &n);
    int answer = m==n ? 1 : 0;
    printf("%d", answer);
}