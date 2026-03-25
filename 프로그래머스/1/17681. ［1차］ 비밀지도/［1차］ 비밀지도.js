function solution(n, arr1, arr2) {
    let result = []
    const a1 = arr1.map((c) => c.toString(2).padStart(n, 0))
    const a2 = arr2.map((c) => c.toString(2).padStart(n, 0))
    
    for (let i = 0; i < n; i++) {
        let answer = []
        for (let j = 0; j < n; j++) {
            answer.push(a1[i][j] | a2[i][j] ? "#" : " ")
        }
        result.push(answer.join(""))
    }
    return result
}