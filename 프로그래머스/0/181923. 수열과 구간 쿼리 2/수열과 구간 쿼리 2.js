const getMatchIndex = (n, q) => q[0] <= n <= q[1]

function solution(arr, queries) {
    let answer = []
    queries.map((q) => {
        let array = arr.slice(q[0],q[1]+1).filter(n => n > q[2])
        answer.push(array.length === 0 ? -1 : Math.min(...array))
    })
    return answer
}