function solution(left, right) {
    let result = 0;
    for (let i = left; i <= right; i++) {
        let sum = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                sum++
            }
        }
        if (sum % 2 === 0) {
            result += i
        } else {
            result -= i
        }
    }
    return result
}