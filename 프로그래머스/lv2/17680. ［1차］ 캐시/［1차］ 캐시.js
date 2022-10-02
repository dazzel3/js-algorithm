function solution(cacheSize, cities) {
    let time = 0
    let arr = []
    cities = cities.map((v) => v.toUpperCase())
    if (cacheSize === 0) return cities.length * 5
    for (let i=0; i<cities.length; i++) {
        if (arr.length !== cacheSize && !arr.includes(cities[i])) {
            arr.unshift(cities[i])
            time += 5
        } else {
            if (arr.includes(cities[i])) {
                arr = arr.filter((v) => v !== cities[i])
                arr.unshift(cities[i])
                time += 1
            } else {
                arr.pop()
                arr.unshift(cities[i])
                time += 5
            }
        }
    } return time
}