#include <stdio.h>
int main(void){
    int N, M = 0;
    double sum = 0;
    double avg = 0;
    int score[1001] = {0};
    scanf("%d", &N);
    for(int i = 0; i<N; i++){
        scanf("%d", &score[i]);
        if(M<score[i]) M=score[i];
    }
    
    for(int i = 0; i<N; i++){
        sum += (double)score[i]/M*100;
    }
    avg = sum / N;
    printf("%lf", avg);
    return 0;
}