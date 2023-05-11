import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

//bufferedReader 사용하여 입력받기
//
class Main{
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        //한 줄 읽어오기 readLine()
        String str = br.readLine();
        
        //StringTokenizer( "문자열" , 구분자 );
		StringTokenizer st = new StringTokenizer(str," ");
        
        //Integer.parseInt()로 int 형변환
        //nextToken()으로 저장된 변수 차례대로 꺼내옴 (반환되면서 객체에서 사라짐)
		int a = Integer.parseInt(st.nextToken());
		int b = Integer.parseInt(st.nextToken());
		
		System.out.println(a+b);
    }
}