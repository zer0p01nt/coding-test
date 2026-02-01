function solution(sides) {
    let arr = []
    const [a, b] = sides.sort((a, b) => a - b)
    
    // 가장 긴 변이 b인 경우 = a + x > b && x <= b
    for (let i = 1; i <= b; i++) {
        if (a + i > b) {
            arr.push(i)
        } 
    }
    
    // 가장 긴 변이 x인 경우 = a + b > x && x >= b
    for (let i = b; i < a + b; i++) {
        arr.push(i)
    }
    
    return [...new Set(arr)].length
}