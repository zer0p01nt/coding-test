function solution(arr) {
    arr.map((n, i) => {
        if (n >= 50 && n % 2 === 0) {
            arr[i] /= 2
        } else if (n < 50 && n % 2 === 1) {
            arr [i] *= 2
        }
    })
    return arr
}