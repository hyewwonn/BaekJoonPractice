function solution(s) {

    let openBracketCount = 0;
    const length = s.length;

    for (let i = 0; i < length; i++) {
        const currentChar = s[i];

        if (currentChar === '(') {
            openBracketCount++;
        } else {
            openBracketCount--;
            if (openBracketCount < 0 || openBracketCount > length - i) {
                return false;
            }
        }
    }

    return openBracketCount === 0;
}