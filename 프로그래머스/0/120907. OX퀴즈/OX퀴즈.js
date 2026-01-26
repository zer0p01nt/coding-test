function solution(quiz) {
    let result = []
    quiz.map((q) => {
        const arr = q.split(" ")
        if (arr[1] === "+") {
            if (+arr[0] + +arr[2] === +arr[4]) {
                result.push("O")
            } else {
                result.push("X")
            }
        } else {
            if (+arr[0] - +arr[2] === +arr[4]) {
                result.push("O")
            } else {
                result.push("X")
            }
        }
    })
    return result
}