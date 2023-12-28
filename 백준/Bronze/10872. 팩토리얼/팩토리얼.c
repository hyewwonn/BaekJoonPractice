#include <stdio.h>

int main(void) {
    int n = 0;
    scanf("%d", &n);
    
    int answer = n;
    if(n == 0) printf("%d", 1);
    else {
        for(int i = 1; i<n; i++) {
            answer *= i;
        }
        printf("%d", answer);
    }
    return 0;
}