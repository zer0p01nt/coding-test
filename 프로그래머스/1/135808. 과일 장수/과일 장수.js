function solution(k, m, score) {
    const sorted = [...score].sort((a, b) => b - a)
    let answer = 0;
    console.log(sorted[m-1])
    for (let i = m - 1; i < sorted.length; i+=m) {
        answer += (sorted[i] * m)
    }
    return answer
}