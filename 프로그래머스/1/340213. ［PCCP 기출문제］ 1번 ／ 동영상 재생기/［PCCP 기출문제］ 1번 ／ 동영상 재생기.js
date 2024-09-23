function timeToSeconds(time) {
    const [mm, ss] = time.split(':').map(Number);
    return mm * 60 + ss;
}

function secondsToTime(seconds) {
    const mm = Math.floor(seconds / 60).toString().padStart(2, '0');
    const ss = (seconds % 60).toString().padStart(2, '0');
    return `${mm}:${ss}`;
}

function solution(video_len, pos, op_start, op_end, commands) {
    let videoLen = timeToSeconds(video_len);
    let current = timeToSeconds(pos);
    const opStart = timeToSeconds(op_start);
    const opEnd = timeToSeconds(op_end);

    for (const command of commands) {
        if (current >= opStart && current <= opEnd) {
            current = opEnd;
        }

        if (command === "prev") {
            current = Math.max(current - 10, 0);
        } else if (command === "next") {
            current = Math.min(current + 10, videoLen);
        }
    }

    return secondsToTime(current >= opStart && current <= opEnd ? opEnd : current);
}
