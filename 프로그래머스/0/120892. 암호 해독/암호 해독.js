function solution(cipher, code) {
    let answer = ""
    cipher.split("").map((char, i) => {
        if (i % code === code-1) {
            answer += char
        }
    })
    return answer
}