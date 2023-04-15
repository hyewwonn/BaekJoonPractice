#include <stdio.h>
int main(void) {
    int arr[31] = { 0 };
    int j;
    for (int i = 0; i < 28; i++) {
        scanf("%d", &j);
        arr[j] = j;
    }
    for (int i = 1; i < 31; i++) {
        if (arr[i] == 0) {
            printf("%d\n", i);
        }
    }
    
    return 0;
}