function solution(rsp) {
    let result = ""
    rsp.split("").map((r) => {
        if (r === "0") {
            result += "5"
        } else if (r === "2") {
            result += "0"
        } else {
            result += "2"
        }
    })
    return result
}