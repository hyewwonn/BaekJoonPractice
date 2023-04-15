#include <stdio.h>
int main(void){
    int N, M;
    int arr[101] = {0};
    scanf("%d %d", &N, &M);
    for(int count = 1; count<=M; count++){
        int i, j, k;
        scanf("%d %d %d", &i, &j, &k);
        for(int idx = i; idx<=j; idx++){
            arr[idx] = k;
        }
    }
    for(int i = 1; i<=N; i++){
        printf("%d ",arr[i]);
    }
    return 0;
}