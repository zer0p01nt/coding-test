function solution(price, money, count) {
    let charge = 0;
    for (let i = 1; i <= count; i++) {
        charge += (price * i)
    }
    return charge > money ? charge - money : 0
}