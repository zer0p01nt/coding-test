function solution(arr, k) {
    if (k % 2 === 0) {
        return arr.map((n) => n + k)
    } else {
        return arr.map((n) => n * k)
    }
}