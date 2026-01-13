function solution(arr) {
    let x = 0;
    while (true) {
        let arr2 = [...arr]
        
        arr.map((num, i) => {
            if (num >= 50 && num % 2 === 0) {
                arr[i] /= 2
            } else if (num < 50 && num % 2 === 1) {
                arr[i] = arr[i] * 2 + 1
            }
        })
        
        if (JSON.stringify(arr) === JSON.stringify(arr2)) {
            break;
        } else {
            x++
        }
    }
    return x
}