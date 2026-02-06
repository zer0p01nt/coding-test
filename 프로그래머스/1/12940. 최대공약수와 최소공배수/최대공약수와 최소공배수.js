function solution(n, m) {
    let maxArr = [];
    let min = 0;
    const [num1, num2] = [n, m].sort((a, b) => a - b)
    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            maxArr.push(i);
        }
    }
    for (let i = num1; i <= num1 * num2; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            min = i;
            break;
        }
    }
    const max = maxArr.sort((a, b) => b - a)[0]
    return [max, min]
}