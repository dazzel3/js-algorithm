function solution(players, callings) {
    const map = new Map();
    const map2 = new Map();
    
    players.forEach((v, i) => map.set(v, i));
    players.forEach((v, i) => map2.set(i, v));
    
    for (calling of callings) {
        const current = map.get(calling);
        const prevPlayer = map2.get(current - 1);
        
        map.set(prevPlayer, current);
        map.set(calling, current - 1);
        
        map2.set(current, prevPlayer);
        map2.set(current - 1, calling);
    }
    const result = [];
    for (const [k, v] of map.entries()) {
        result[v] = k;
    }
    return result;
}