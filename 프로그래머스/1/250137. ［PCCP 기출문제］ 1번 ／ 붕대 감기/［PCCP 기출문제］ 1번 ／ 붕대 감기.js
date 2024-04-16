function solution(bandage, health, attacks) {
    let result = health
    const totalTime = Math.max(...attacks.map(([time, attack]) => time))
    const attackInfo = {}
    
    for (const [time, attack] of attacks) {
        attackInfo[time] = attack
    }
    
    let sequence = 0
    for (let sec = 1; sec <= totalTime; sec++) {
        if (result >= health) result = health
        if (attackInfo[sec]) {
            result -= attackInfo[sec]
            if (result <= 0) return -1
            sequence = 0
        } else {
            result += bandage[1]
            sequence += 1
            if (sequence === bandage[0]) {
                result += bandage[2]
                sequence = 0
            }
        }
    }
    return result
}