function solution(A, B) {
    if (A === B) return 0
    
    let arr = A.split("")
    let sum = 0;
    
    for (let i = 1; i <= A.length; i++) {
        let first = arr.pop();
        arr.unshift(first);
        if (arr.join("") === B) {
            sum = i
            break;
        }
    }
    
    return arr.join("") === B ? sum : -1
}