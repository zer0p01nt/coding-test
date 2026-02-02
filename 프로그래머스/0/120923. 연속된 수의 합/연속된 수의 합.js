function solution(num, total) {
    let s = (total * 2 / num - num + 1) / 2
    let answer = new Array(num)
    for (let i = 0; i < num; i++) {
        answer[i] = s + i
    }
    return answer
}