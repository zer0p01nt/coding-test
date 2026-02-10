function solution(array, commands) {
    let answer = []
    for (let n = 0; n < commands.length; n++) {
        let [i, j, k] = commands[n]
        let num = array.slice(i-1, j).sort((a, b) => a - b)[k-1]
        answer.push(num)
    }
    return answer
}