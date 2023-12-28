public class Main {

    public static void main(String[] args) {
        final int limit = 10000;
        
        boolean[] isSelfNumber = new boolean[limit + 1];

        for (int i = 1; i <= limit; i++) {
            int dn = d(i);
            
            if (dn <= limit) {
                isSelfNumber[dn] = true;
            }
        }

        for (int i = 1; i <= limit; i++) {
            if (!isSelfNumber[i]) {
                System.out.println(i);
            }
        }
    }

    public static int d(int number) {
        int sum = number;

        while (number > 0) {
            sum += number % 10;
            number /= 10;
        }

        return sum;
    }
}
