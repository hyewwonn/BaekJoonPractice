#include <stdio.h>
int main(void){
    int x, y;
    scanf("%d", &x);
    scanf("%d", &y);
    if(x>0 && y>0){printf("%d", 1);}
    else if(x<0 && y>0){printf("%d", 2);}
    else if(x<0 && y<0){printf("%d", 3);}
    else {printf("%d", 4);}
    return 0;
}