#include <stdio.h>

int main(void) {
    int n = 0;
    scanf("%d", &n);
    
    int count = 0;
    while (n % 5 != 0 && n >= 3) {
        n -= 3;
        count++;
    }

    if (n % 5 == 0) {
        count += n / 5;
        printf("%d\n", count);
    } else {
        printf("-1\n");
    }
}