function solution(age) {
    let result = []
    age.toString().split("").map((s) => {
        result.push(String.fromCharCode(+s+97))
    })
    return result.join("")
}