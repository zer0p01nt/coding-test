function solution(num) {
    let result = 0;
    while (num !== 1) {
        if (result >= 500) {
            result = -1;
            break;
        }
        
        if (num % 2 === 0) {
            num /= 2
        } else {
            num = num * 3 + 1
        }
        
        result++
    }
    return result
}