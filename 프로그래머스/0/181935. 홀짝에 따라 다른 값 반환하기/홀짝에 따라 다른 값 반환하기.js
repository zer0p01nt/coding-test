function solution(n) {
    if (n % 2 === 1) {
        let odd = 0;
        for (let i = 1; i <= n; i += 2) {
            odd += i;
        }
        return odd;
    } else {
        let even = 0;
        for (let i = 2; i <= n; i += 2) {
            even += Math.pow(i, 2)
        }
        return even;
    }
}