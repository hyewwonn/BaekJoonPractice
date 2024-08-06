function solution(lines) {
    var answer = 0;
    var min = Math.min(...lines.flat());
    var max = Math.max(...lines.flat());
    var arr = new Array(max - min).fill(0);
    lines.forEach((val) => {
        for(let i = val[0]+Math.abs(min); i<val[1]+Math.abs(min); i++) {
            arr[i]++;
        }
    })
    console.log(arr);
    return arr.filter((val) => val>=2).length;
}