function solution(strings, n) {
    let charArr = strings.map((s) => s[n]).sort()
    let answer = []
    charArr.map((c) => {
        strings.sort().map((s) => {
            if (s[n] === c && !answer.includes(s)) {
                answer.push(s)
            }
        })
    })
    return answer
}