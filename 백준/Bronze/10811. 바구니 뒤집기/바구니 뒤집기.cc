#include <stdio.h>

int main(void) {
    int N, M, i, j, temp;
    scanf("%d %d", &N, &M);
    int arr[N];
    
    for(int k = 0; k<N; k++){
        arr[k] = k+1;
    }
    
    for(int k = 0; k<M; k++){
        scanf("%d %d", &i, &j);
        for(int I = i-1, J = j-1; I<J; I++, J--){
            temp = arr[I];
            arr[I] = arr[J];
            arr[J] = temp;
        }
    }
    
    for(int k = 0; k<N; k++){
        printf("%d ", arr[k]);
    }
    
    return 0;
}