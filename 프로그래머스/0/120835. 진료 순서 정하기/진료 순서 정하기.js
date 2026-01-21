function solution(emergency) {
    const sort = [...emergency].sort((a, b) => b - a)
    let result = []
    
    emergency.map((e) => {
        result.push(sort.indexOf(e)+1)
    })
    return result
}