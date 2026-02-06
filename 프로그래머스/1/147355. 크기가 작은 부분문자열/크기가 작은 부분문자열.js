function solution(t, p) {
    let sum = 0;
    for (let i = 0; i < t.length - p.length + 1; i++) {
        let numStr = ""
        for (let j = 0; j < p.length; j++) {
            numStr += t[i+j]
            
        }
        if (+numStr <= +p) {
            sum++
        }
    }
    return sum
}