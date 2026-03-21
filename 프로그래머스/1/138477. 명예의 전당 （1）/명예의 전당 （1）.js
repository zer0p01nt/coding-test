function solution(k, score) {
    let answer = []
    for (let i = 0; i < score.length; i++) {
        let arr = score.slice(0, i + 1)
        let best = arr.sort((a, b) => b - a).slice(0, k)
        answer.push(best.pop())
    }
    return answer
}