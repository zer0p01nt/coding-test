function solution(arr) {
    let X = []
    arr.map((n) => {
        for (let i = 0; i < +n; i++) {
            X.push(n)
        }
    })
    return X
}