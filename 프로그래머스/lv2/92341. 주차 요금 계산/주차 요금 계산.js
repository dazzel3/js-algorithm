function solution(fees, records) {
    records = records.map((v) => v.split(" ")).sort((a, b) => a[1] - b[1])
    
    const answer = []
    let total = 0

    console.log(records)
    
    const time = (inTime, outTime) => {
        let hour = 0, min = 0
        inTime = inTime.split(":").map((v) => Number(v))
        outTime = outTime.split(":").map((v) => Number(v))
   
        if (outTime[1] < inTime[1]) {
            min = 60 + outTime[1] - inTime[1]
            hour = outTime[0] - inTime[0] - 1
        } else {
            min = outTime[1] - inTime[1]
            hour = outTime[0] - inTime[0] 
        }
        return hour * 60 + min
    }
    
    for (let i=0; i<records.length; i++) {
        if (i < records.length-1) {
            if (records[i][2] === 'IN' && records[i][2] !== records[i+1][2]) {
            console.log(records[i][0], records[i+1][0])
                total += time(records[i][0], records[i+1][0])
            } else if (records[i][2] === 'IN') {
                console.log(records[i][0], records[i][2])
                total += time(records[i][0], '23:59')
            }
        } else if (records[i][2] === 'IN') {
            console.log(records[i][0], records[i][2])
            total += time(records[i][0], '23:59')
        }
        if (i < records.length-1 && records[i][1] !== records[i+1][1]) {
            answer.push(total)
            total = 0
        }
    }
    answer.push(total)
    
    return answer.map((v) => {
        return v <= fees[0] ? fees[1] : fees[1] + Math.ceil((v - fees[0])/fees[2]) * fees[3]
    })

}