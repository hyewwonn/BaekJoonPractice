function solution(today, terms, privacies) {
    const answer = [];

    const [todayYear, todayMonth, todayDay] = today.split('.').map(Number);
    const todayDate = new Date(todayYear, todayMonth - 1, todayDay);

    const termMap = {};
    terms.forEach(term => {
        const [type, duration] = term.split(' ');
        termMap[type] = parseInt(duration);
    });

    privacies.forEach((privacy, index) => {
        const [date, termType] = privacy.split(' ');
        const [year, month, day] = date.split('.').map(Number);
        const collectedDate = new Date(year, month - 1, day);
        const durationMonths = termMap[termType];

        const expiryDate = new Date(year, month - 1 + durationMonths, day);

        if (expiryDate <= todayDate) {
            answer.push(index + 1);
        }
    });

    return answer.sort((a, b) => a - b);
}