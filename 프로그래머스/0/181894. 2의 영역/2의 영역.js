function solution(arr) {
    let index = []
    let answer = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            index.push(i)
        }
    }
    if (index.length === 0) {
        answer.push(-1)
    } else {
        answer = arr.slice(Math.min(...index), Math.max(...index) + 1)
    }
    return answer
}