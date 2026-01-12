function solution(arr, queries) {
    queries.map((q) => {
        let [s, e] = q
        for (let i = s; i <= e; i++) {
            arr[i]++
        }
    })
    return arr
}