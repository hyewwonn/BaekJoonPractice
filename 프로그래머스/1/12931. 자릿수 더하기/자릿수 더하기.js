function solution(n)
{
    var sum = 0;
    (n+"").split("").forEach(num=> sum+=num*1)
    return sum;
}