function solution(cards1, cards2, goal) {
    for(let i = 0; i< goal.length; i++) {
        if(goal[i] === cards1[0]) cards1 = cards1.slice(1, cards1.length+1);
        else if(goal[i] === cards2[0]) cards2 = cards2.slice(1, cards2.length+1);
        else return 'No';
    }
    return 'Yes';
}