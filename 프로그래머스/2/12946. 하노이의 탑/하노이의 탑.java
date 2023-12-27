class Solution {
    public int[][] solution(int n) {
        int[][] answer = new int[(int) Math.pow(2, n) - 1][2];
        hanoi(n, 1, 2, 3, answer, 0);
        return answer;
    }
    
    int hanoi(int n, int from, int temp, int to, int[][] answer, int index) {
        if (n == 1) {
            answer[index][0] = from;
            answer[index][1] = to;
            return index + 1;
        } else {
            index = hanoi(n - 1, from, to, temp, answer, index);
            answer[index][0] = from;
            answer[index][1] = to;
            index++;
            index = hanoi(n - 1, temp, from, to, answer, index);
            return index;
        }
    }
}
