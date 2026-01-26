function solution(n) {
    let sum = 0
    String(n).split("").map((num) => {
        sum += +num
    })
    return sum
}