function solution(num_list) {
    const m = num_list.reduce((acc, val) => {return acc * val}, 1)
    const p = num_list.reduce((acc, val) => {return acc + val}, 0)
    
    return m < (p ** 2) ? 1 : 0
}