function solution(today, terms, privacies) {
    const parseDate = (date) => {
        const [year, month, day] = date.split('.').map(Number);
        return new Date(year, month - 1, day);
    };

    const todayDate = parseDate(today);

    const termMap = {};
    terms.forEach(term => {
        const [type, duration] = term.split(' ');
        termMap[type] = parseInt(duration);
    });

    const result = [];

    privacies.forEach((privacy, index) => {
        const [date, termType] = privacy.split(' ');
        const collectedDate = parseDate(date);
        const durationMonths = termMap[termType];

        const expiryDate = new Date(collectedDate);
        expiryDate.setMonth(expiryDate.getMonth() + durationMonths);

        if (expiryDate <= todayDate) {
            result.push(index + 1);
        }
    });

    return result;
}