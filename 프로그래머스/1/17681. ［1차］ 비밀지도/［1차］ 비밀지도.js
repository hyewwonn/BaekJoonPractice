function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i < n; i++) {
        let array1 = arr1[i].toString(2).padStart(n, 0);
        let array2 = arr2[i].toString(2).padStart(n, 0);
        let val = '';
        for(let j = 0; j < n; j++) {
            if(array1[j] == 1 || array2[j] == 1) val += '#';
            else val += ' ';
        }
        answer[i] = val;
    }
    
    return answer;
}