function solution(s) {
    var answer = '';
    
    answer = s.split(' ').map(word => {
        return [...word].map((char, index) => {
            return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        }).join('');
    }).join(' ');
    
    return answer;
}