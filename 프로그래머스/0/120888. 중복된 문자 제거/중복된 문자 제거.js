function solution(my_string) {
    let answer = ""
    my_string.split("").map((s) => {
        if (!answer.includes(s)) {
            answer += s
        }
    })
    return answer
}