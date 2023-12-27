function solution(name, yearning, photo) {
    var answer = [];
    for(let i = 0; i<photo.length; i++) {
        answer[i] = 0;
        for(let j = 0; j<photo[i].length; j++) {
            if(name.includes(photo[i][j])) {
                answer[i] += yearning[name.indexOf(photo[i][j])];
            }
            else continue;
        }
    }
    return answer;
}