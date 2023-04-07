#include <stdio.h>
int main(void){
    int h, m;
    scanf("%d %d", &h, &m);
    if(m>=45){m -= 45;}
    else if(h >=1){h-=1; m+=60; m-=45;}
    else {h = 23; m+= 60; m-=45;}
    printf("%d %d",h,m);
    return 0;
}