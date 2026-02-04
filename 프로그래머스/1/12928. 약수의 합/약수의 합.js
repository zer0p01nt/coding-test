function solution(n) {
    let answer = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer.push(i)
        }
    }
    return answer.reduce((a, c) => a + c, 0)
}