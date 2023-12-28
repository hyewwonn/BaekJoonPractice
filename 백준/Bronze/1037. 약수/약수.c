#include <stdio.h>

int main()
{
    int a_divisor = 0;
    long long max = 0, min = 1000001;

    int num;
    scanf("%d", &num);

    for(int i = 0; i < num; i++){
        scanf("%d", &a_divisor);

        if(a_divisor > max)
            max = a_divisor;
        if(a_divisor < min)
            min = a_divisor;
    }

    printf("%lld\n", max * min);

    return 0;
}