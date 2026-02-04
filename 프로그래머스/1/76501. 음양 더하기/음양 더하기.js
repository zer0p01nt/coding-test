function solution(absolutes, signs) {
    let sum = 0;
    absolutes.map((n, i) => {
        if (signs[i]) {
            sum += n
        } else {
            sum -= n
        }
    })
    return sum
}