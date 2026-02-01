function solution(a, b) {
    const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));
    let gcd = getGCD(a, b);

    let denominator = b / gcd;

    for (let i of [2, 5]) {
        while (denominator % i === 0) {
            denominator /= i;
        }
    }

    return denominator === 1 ? 1 : 2;
}