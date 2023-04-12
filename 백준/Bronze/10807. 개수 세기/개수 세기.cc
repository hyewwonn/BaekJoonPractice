#include <stdio.h>
int main(void){
    int n, v, count = 0;
    int arr[100] = {0};
    scanf("%d", &n);
    for(int i = 0; i<n; i++){
        int a;
        scanf("%d", &a);
        arr[i] = a;
    }
    scanf("%d", &v);
    for(int j = 0; j<n; j++){
        if(arr[j]==v) count ++;
    }
    printf("%d", count);
    return 0;
}