function solution(arr, queries) {
    let array = arr
    queries.map((q) => {
        let item = array[q[0]]
        array[q[0]] = array[q[1]]
        array[q[1]] = item
    })
    return array
}