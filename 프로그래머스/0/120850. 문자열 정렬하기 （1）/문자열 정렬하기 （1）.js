function solution(my_string) {
    let arr = []
    my_string.split("").map((s) => {
        if (Number.isInteger(+s)) {
            arr.push(+s)
        }
    })
    return arr.sort((a, b) => a - b)
}