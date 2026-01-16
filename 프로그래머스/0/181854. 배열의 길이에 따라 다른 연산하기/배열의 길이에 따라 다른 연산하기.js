function solution(arr, n) {
    if (arr.length % 2 !== 0) {
        arr.map((_, i) => {
            if (i % 2 === 0) {
                arr[i] += n
            }
        })
    } else {
        arr.map((_, i) => {
            if (i % 2 !== 0) {
                arr[i] += n
            }
        })
    }
    return arr
}