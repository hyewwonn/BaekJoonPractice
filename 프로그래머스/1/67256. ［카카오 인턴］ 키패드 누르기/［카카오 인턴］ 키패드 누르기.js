function solution(numbers, hand) {
    var answer = '';
    var currentLeft = 10;
    var currentRight = 12;

    function getDistance(position, target) {
        return Math.abs(Math.floor((position - 1) / 3) - Math.floor((target - 1) / 3)) +
               Math.abs((position - 1) % 3 - (target - 1) % 3);
    }

    for(let i = 0; i < numbers.length; i++) {
        let number = numbers[i] === 0 ? 11 : numbers[i];

        if(number % 3 === 1) { // 1, 4, 7
            answer += 'L';
            currentLeft = number;
        }
        else if(number % 3 === 0 && number !== 11) { // 3, 6, 9
            answer += 'R';
            currentRight = number;
        }
        else { // 2, 5, 8, 0(11)
            let leftMove = getDistance(currentLeft, number);
            let rightMove = getDistance(currentRight, number);

            if(leftMove === rightMove) {
                if(hand === "left") {
                    answer += 'L';
                    currentLeft = number;
                } else {
                    answer += 'R';
                    currentRight = number;
                }
            } else {
                if(leftMove < rightMove) {
                    answer += 'L';
                    currentLeft = number;
                } else {
                    answer += 'R';
                    currentRight = number;
                }
            }
        }
    }
    return answer;
}