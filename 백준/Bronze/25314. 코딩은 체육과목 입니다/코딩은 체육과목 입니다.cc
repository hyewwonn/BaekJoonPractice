#include <stdio.h>
int main(void){
    int N;
    scanf("%d", &N);
    if(N%4==0) N/=4;
    else (N/=4)+1;
    for(int i = 0; i<N; i++){
        printf("long ");
    }
    printf("int");
    return 0;
}