#include <stdio.h>

int main(void) {
    int check[] = { 1, 1, 2, 2, 2, 8 };
    int count;

    for (int i = 0; i < 6; i++) {
        scanf("%d", &count);
        printf("%d ", check[i] - count);
    }

    return 0;
}