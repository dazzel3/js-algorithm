function solution(array, commands) {
    let answer = []
    for (let n=0; n<commands.length; n++) {
        let i = commands[n][0], j = commands[n][1], k = commands[n][2]
        let arr = array.slice(i-1, j).sort((a,b) => a-b)
        answer.push(arr[k-1])
    }
    return answer
}