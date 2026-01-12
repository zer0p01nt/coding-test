function solution(arr, query) {
    query.map((num, i) => {
        if (i % 2 === 0) {
            arr = arr.slice(0, num+1)
        } else {
            arr = arr.slice(num, arr.length)
        }
    })
    return arr
}