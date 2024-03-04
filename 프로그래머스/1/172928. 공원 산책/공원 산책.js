function solution(park, routes) {
    const routers = routes.map(v => v.split(' '))
    const row = park[0].length - 1, col = park.length - 1
    
    let current = {y: 0, x: 0}
    
    park.forEach((el, index) => {
        if (el.indexOf('S') > -1) {
            current.y = index
            current.x = el.indexOf('S')
        }
    })
    
    for (let i = 0; i < routers.length; i++) {
        const router = routers[i][0]
        let tempX = current.x, tempY = current.y
        switch (router) {
            case 'E':
                for (let j = 0; j < routers[i][1]; j++) {
                    current.x += 1;
                    if (current.x > row || park[current.y][current.x] === 'X') {
                        current.x = tempX
                        break
                    }
                }
                break
            case 'W':
                for (let j = 0; j < routers[i][1]; j++) {
                    current.x -= 1;
                    if (current.x < 0 || park[current.y][current.x] === 'X') {
                        current.x = tempX
                        break
                    }
                }
                break
            case 'S':
                for (let j = 0; j < routers[i][1]; j++) {
                    current.y += 1;
                    if (current.y > col || park[current.y][current.x] === 'X') {
                        current.y = tempY
                        break
                    }
                }
                break
            case 'N':
                for (let j = 0; j < routers[i][1]; j++) {
                    current.y -= 1;
                    if (current.y < 0 || park[current.y][current.x] === 'X') {
                        current.y = tempY
                        break
                    }
                }
                break
            default:
                break  
        }
    }
    return [current.y, current.x]
}