#include <stdio.h>
int main(void) {
    int N, M;
    scanf("%d %d", &N, &M);
    int arr[101] = { 0 };
    for(int i = 1; i<=N; i++){
        arr[i] = i;
    }
    for (int cnt = 1; cnt <= M; cnt++) {
        int i, j, temp = 0;
        scanf("%d %d", &i, &j);
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    for (int i = 1; i <= N; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}