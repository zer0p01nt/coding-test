function solution(numer1, denom1, numer2, denom2) {
    const getGcd = (a, b) => {
        if (b === 0) return a; // 나누어지면 a 리턴
        return getGcd(b, a % b); // 나누어지지 않는다면 b와 a%b를 다시 나눈다
    };
    
    const numer = (numer1 * denom2) + (numer2 * denom1)
    const denom = denom1 * denom2
    const gcd = getGcd(numer, denom)
    
    return [numer / gcd, denom / gcd]
    
}