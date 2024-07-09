function solution(participant, completion) {
    const participantMap = new Map(); // 해시맵
    
    for (const person of participant) {
        if (participantMap.has(person)) {
            participantMap.set(person, participantMap.get(person) + 1);
        } else {
            participantMap.set(person, 1);
        }
    }

    for (const person of completion) {
        if (participantMap.has(person)) {
            participantMap.set(person, participantMap.get(person) - 1);
        }
    }

    for (const [key, value] of participantMap) {
        if (value > 0) {
            return key;
        }
    }
}
