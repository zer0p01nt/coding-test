function solution(s) {
    let chars = []
    let answer = []
    for (let i = 0; i < s.length; i++) {
        if (!chars.includes(s[i])) {
            answer.push(-1)
        } else {
            answer.push(i - chars.lastIndexOf(s[i]))
        }
        chars.push(s[i])
    }
    return answer
}