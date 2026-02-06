function solution(t, p) {
    let cnt = 0;
    for(let i = 0; i <= t.length - p.length; i++) {
        let value = t.slice(i,  i + p.length);
        if (+p >= +value) cnt++;
    }
    return cnt;
}