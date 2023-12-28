import java.util.Scanner;

public class Main {
	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		int start = n;
		
		int count = 0;
		
		while(true) {
			n = (n % 10 * 10)+((n / 10 + n % 10) % 10);
			count ++;
			if(start == n) {
				break;
			} 
		}
		System.out.print(count);
	}
}