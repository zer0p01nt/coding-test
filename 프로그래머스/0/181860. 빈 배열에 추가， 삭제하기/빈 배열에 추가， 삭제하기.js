function solution(arr, flag) {
    let X = []
    flag.map((b, i) => {
        n = arr[i]
        if (b) {
            for (let i = 0; i < n*2; i++) {
                X.push(n)
            }
        } else {
            for (let i = 0; i < n; i++) {
                X.pop()
            }
        }
    })
    return X
}