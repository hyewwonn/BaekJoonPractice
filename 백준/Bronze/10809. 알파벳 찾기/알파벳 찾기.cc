#include <stdio.h>
#include <string.h>

int main() {
	int arr[26]; //알파벳 26자
	char S[100];
	scanf("%s", &S);
	int i, j;

	for (int i = 0; i < 26; i++)
		arr[i] = -1; // -1로 초기화
    
	for (i = 97; i <= 122; i++){ //'a'==97, 'z'==122
		for (j = 0; j < strlen(S); j++){ //S의 길이만큼 반복
			if (S[j] == i){ //해당위치에 i(알파벳)이 있으면
				arr[S[j] -'a'] = j; //S[j]==i, 예를 들어 97. 이를 arr 배열의 a 위치에 넣기 위해 97을 뺌.
				break;
			}
		}
	}
	for (i = 0; i < 26; i++) { //출력
        printf("%d ", arr[i]);
    }
	return 0;
}