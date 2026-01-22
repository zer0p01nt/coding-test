function solution(balls, share) {
    if (share > balls / 2) share = balls - share;
    
    let result = 1;
    for (let i = 1; i <= share; i++) {
        result *= (balls - i + 1);
        result /= i;
    }
    
    return Math.round(result);
}