function solution(a, b) {
    var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var date = new Date(`2016-${a}-${b}`);
    
    return days[date.getDay()];
}