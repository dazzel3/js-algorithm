function solution(today, terms, privacies) {
    const result = []
    const validDate = Object.fromEntries(terms.map((term) => term.split(' ')))
    
    privacies.map((privacy) => privacy.split(' ')).forEach(([date, type], index) => {
        const validYear = Math.floor(Number(validDate[type]) / 12)
        const validMonth = Number(validDate[type]) % 12
        let [year, month, day] = date.split('.').map((v) => Number(v))
        
        if (validYear) year += validYear
        if (validMonth) month += validMonth
        if (month > 12) {
            year += 1
            month -= 12    
        }
        day -= 1
        if (!day) {
            day += 28
            month -= 1
        }
        if (new Date(today) > new Date([year, month, day].join('.'))) {
            result.push(index + 1)
        }
    })
    return result
}