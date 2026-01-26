function solution(s1, s2) {
    let sum = 0;
    s1.map((s) => {
        if (s2.includes(s)) sum += 1
    })
    return sum
}