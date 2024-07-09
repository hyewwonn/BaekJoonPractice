function solution(participant, completion) {
    const participantMap = new Map();
    
    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        participantMap.set(a, (participantMap.get(a) || 0) + 1);
        participantMap.set(b, (participantMap.get(b) || 0) - 1);
    }

    for (const [key, value] of participantMap) {
        if (value > 0) {
            return key;
        }
    }
}
