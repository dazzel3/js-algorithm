function solution(bridge_length, weight, truck_weights) {
    let bridge_weights = 0
    let timer = 0
    
    const bridge = Array(bridge_length).fill(0)
    
    timer++
    bridge.shift()
    bridge_weights += truck_weights[0]
    bridge.push(truck_weights.shift())
    
    while (bridge_weights > 0) {
        timer++
        bridge_weights -= bridge.shift()
        
        if (truck_weights && bridge_weights + truck_weights[0] <= weight) {
            bridge_weights += truck_weights[0]
            bridge.push(truck_weights.shift())
        } else {
            bridge.push(0)
        }
    }
    return timer
}