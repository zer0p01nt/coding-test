function solution(x, n) {
    let answer = []
    let init = x
    while (true) {
        if (answer.length === n) break
        
        answer.push(init)
        init += x
    }
    return answer
}