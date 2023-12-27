import java.util.Arrays;
class Solution {
    public long solution(int n, int[] times) {
        long answer = 0;
        Arrays.sort(times);
        long start = 0;
        long maxTime = (long) n * times[times.length-1];
        while(start <= maxTime) {
            long mid = (start + maxTime) /2;
            long sum = 0;
            for(int i = 0; i<times.length; i++){
                sum += mid/times[i];
            }
            if(sum < n){
                start = mid + 1;
            }else {
                maxTime = mid - 1;
                answer = mid;
            }
        }
        return answer;
    }
}