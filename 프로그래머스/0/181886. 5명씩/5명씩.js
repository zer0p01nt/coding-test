function solution(names) {
    let front = []
    names.map((name, i) => {
        if (i % 5 === 0) {
            front.push(name)
        }
    })
    return front
}