function solution(today, terms, privacies) {
    const answer = [];
    
    const [todayYear, todayMonth, todayDay] = today.split('.').map(Number);
    const todayDate = new Date(todayYear, todayMonth - 1, todayDay);

    const termMap = {};
    terms.forEach(term => {
        const [type, duration] = term.split(' ');
        termMap[type] = parseInt(duration) * 28;
    });

    const dateToDays = (year, month, day) => {
        return year * 12 * 28 + month * 28 + day;
    };

    const todayDays = dateToDays(todayYear, todayMonth, todayDay);

    privacies.forEach((privacy, index) => {
        const [date, termType] = privacy.split(' ');
        const [year, month, day] = date.split('.').map(Number);
        const collectedDays = dateToDays(year, month, day);
        const expirationDays = termMap[termType];

        const expiryDays = collectedDays + expirationDays;

        if (expiryDays <= todayDays) {
            answer.push(index + 1);
        }
    });

    return answer.sort((a, b) => a - b);
}