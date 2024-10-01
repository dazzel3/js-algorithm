function solution(video_len, pos, op_start, op_end, commands) {
    let current = convertToSec(pos)
    const total = convertToSec(video_len)
    const startOfOp = convertToSec(op_start)
    const endOfOp = convertToSec(op_end)
    
    current = checkOpTime(current, startOfOp, endOfOp)
    for (const type of commands) {
        if (type === 'prev') {
            current = moveToPrev(current)
            current = checkOpTime(current, startOfOp, endOfOp)
        }
        else if (type === 'next') {
            current = moveToNext(current, total)
            current = checkOpTime(current, startOfOp, endOfOp)
        }
    }
    return convertDateToString(current)
}

function checkOpTime(currentTime, startTime, endTime) {
    if (currentTime >= startTime && currentTime <= endTime) {
        return endTime
    }
    return currentTime
}

function moveToPrev(currentTime) {
    if (currentTime < 10) {
        return 0
    }
    return currentTime - 10
}

function moveToNext(currentTime, totalLen) {
    if (totalLen - currentTime < 10) {
        return totalLen
    }
    return currentTime + 10
}

function convertToSec(value) {
    let [min, sec] = value.split(':').map(v => +v)
    return min * 60 + sec
}

function convertDateToString(value) {
    const m = String(Math.floor(value / 60)).padStart(2, '0')
    const s = String(value % 60).padStart(2, '0')
    return `${m}:${s}`
}