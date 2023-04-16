#include <stdio.h>
int main(void){
    int arr[42] = {0};
    int n, cnt = 0;
    for(int i = 0; i<10; i++){
        scanf("%d", &n);
        arr[n%42]++;
    }
    for(int i = 0; i<42; i++){
        if(arr[i] >= 1){
            cnt++;
        }
    }
    printf("%d", cnt);
    return 0;
}