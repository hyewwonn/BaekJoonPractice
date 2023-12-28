#include <stdio.h>
#define max(a, b) a > b ? a : b

int main(void){
    int lcs[1001][1001];
    char str[2][1001];
    scanf("%s %s", &str[0], &str[1]);
    
    int i, j;
    for (i = 0; str[0][i]; i++) {
        for (j = 0; str[1][j]; j++) {
            if (str[0][i] == str[1][j]) lcs[j+1][i+1] = lcs[j][i] +1;
            else lcs[j+1][i+1] = max(lcs[j][i+1], lcs[j+1][i]);
        }	   
    }
    printf("%d", lcs[j][i]);
}