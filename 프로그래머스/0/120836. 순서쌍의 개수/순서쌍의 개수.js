function solution(n) {
    const divisors = [];
    const sqrtN = Math.sqrt(n);

    for (let i = 1; i <= sqrtN; i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (i * i !== n) {
                divisors.push(n / i);
            }
        }
    }
    return divisors.length
}