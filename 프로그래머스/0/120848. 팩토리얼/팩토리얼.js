function solution(n) {
    let mul = 1;
    let cnt = 1;
    while (true) {
        mul *= cnt;
        if (mul > n) {
            return cnt - 1
        } else {
            cnt++
        }
    }
}