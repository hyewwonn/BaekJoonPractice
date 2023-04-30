#include <stdio.h>
#include <string.h>

int main(void) {
	int T,R;
	char S[20];
    scanf("%d", &T);
    
	for(int i=0; i<T; i++) { //테스트케이스 개수만큼 반복
		scanf("%d %s", &R, S); //반복할 횟수, 문자열 받기
		
		for(int j=0; j < strlen(S); j++)  //문자열의 길이만큼 반복
			for(int k=0; k<R; k++) printf("%c", S[j]); //문자열 S를 자리마다 R번 출력
		
		printf("\n");
	}

}