function solution(num) {
    var answer = 0;
    for(let i = 0; i<500; i++){
        if(num == 1) return answer
        else num = collatz(num)
        answer ++;
    }
    return -1;
        
}

const collatz = (num) => {
    if(num%2===0) return num/2;
    else return num*3+1;
}