function solution(a, b, n) {
    let remain = n;
    let answer = 0;
    while (remain >= a) {
        let rest = remain % a;
        let increased = Math.trunc(remain / a) * b
        answer += increased
        remain = rest + increased
    }
    return answer;
}