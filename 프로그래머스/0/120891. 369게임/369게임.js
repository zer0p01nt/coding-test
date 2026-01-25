function solution(order) {
    return String(order).split("").filter((el) => ["3", "6", "9"].includes(el)).length
}