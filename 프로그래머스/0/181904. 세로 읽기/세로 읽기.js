function solution(my_string, m, c) {
    let answer = []
    my_string.split("").map((char, i) => {
        if (i % m === c-1) {
            answer.push(char)
        }
    })
    return answer.join("")
}