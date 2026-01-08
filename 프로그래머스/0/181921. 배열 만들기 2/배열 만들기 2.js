function solution(l, r) {
    let arr = []
    const regex = /^[0,5]*$/
    for (let i = l; i <= r; i++) {
        if (regex.test(String(i)) && i % 5 === 0) {
            arr.push(i)
        }
    }
    if (arr.length === 0) {
        arr.push(-1)
    }
    return arr
}