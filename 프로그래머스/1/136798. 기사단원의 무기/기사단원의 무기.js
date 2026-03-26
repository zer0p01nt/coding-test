function solution(number, limit, power) {
    let result = []
    for (let i = 1; i <= number; i++) {
        let count = 0;
        let s = Math.sqrt(i);
        for (let j = 1; j <= s; j++) {
            if (i % j === 0) {
                count++
                if (j * j !== i) {
                    count++
                }
            }
        }
        result.push(count <= limit ? count : power)
    }
    return result.reduce((a, c) => a + c)
    
}