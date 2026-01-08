function solution(n) {
    let num = n
    let arr = [n]
    for (let i = 1; i <= n; i++) {
        if (num === 1) {
            break;
        } 
        
        if (num % 2 === 0) {
            num = Number(num / 2)
            arr.push(num)
        } else {
            num = 3 * num + 1
            arr.push(num)
        }
    }
    return arr
}