function solution(a, d, included) {
    let answer = 0;
    const n = included.length
    for (let i = 0; i < n; i++) {
        if (included[i]) {
            if (i === 0) {
                answer += a;
            } else {
                answer += a + (i * d)
            }
            
        }
    }
    return answer
}