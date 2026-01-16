function solution(num_str) {
    let sum = 0;
    num_str.split("").map((s) => sum += +s)
    return sum
}