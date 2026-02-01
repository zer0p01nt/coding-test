function solution(chicken) {
    let coupons = chicken;
    let answer = 0;
    while (true){
        answer += Math.floor(coupons/10);
        coupons = Math.floor(coupons/10) + (coupons%10);
        if (coupons === 0 || Math.floor (coupons / 10) === 0) break;
    }
    return answer;
}