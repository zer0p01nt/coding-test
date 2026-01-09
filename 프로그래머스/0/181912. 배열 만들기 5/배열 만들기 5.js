function solution(intStrs, k, s, l) {
    let answer = []
    intStrs.map((str) => {
        let num = Number(str.slice(s, s+l))
        num > k && answer.push(num)
    })
    return answer
}